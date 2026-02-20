import { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Chip,
} from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import InboxIcon from '@mui/icons-material/Inbox';

const INITIAL_ITEMS = [
  { id: 'item-1', label: 'React 학습하기', color: 'primary' },
  { id: 'item-2', label: 'MUI 컴포넌트 익히기', color: 'secondary' },
  { id: 'item-3', label: 'API 연동 구현', color: 'success' },
  { id: 'item-4', label: '테스트 코드 작성', color: 'warning' },
  { id: 'item-5', label: '배포 파이프라인 구축', color: 'info' },
];

const DragDropSection = () => {
  const [sourceItems, setSourceItems] = useState(INITIAL_ITEMS);
  const [droppedItems, setDroppedItems] = useState([]);
  const [draggingId, setDraggingId] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('application/json', JSON.stringify(item));
    e.dataTransfer.effectAllowed = 'move';
    setDraggingId(item.id);
  };

  const handleDragEnd = () => {
    setDraggingId(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const item = JSON.parse(e.dataTransfer.getData('application/json'));
    if (droppedItems.some((d) => d.id === item.id)) return;

    setSourceItems((prev) => prev.filter((i) => i.id !== item.id));
    setDroppedItems((prev) => [...prev, item]);
    setDraggingId(null);
  };

  const handleReturn = (item) => {
    setDroppedItems((prev) => prev.filter((i) => i.id !== item.id));
    setSourceItems((prev) => [...prev, item]);
  };

  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Drag & Drop
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        아이템을 드래그하여 드롭 영역으로 이동해 보세요.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 3,
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'stretch', md: 'flex-start' },
        }}
      >
        {/* 드래그 아이템 영역 */}
        <Paper
          variant="outlined"
          sx={{
            flex: 1,
            p: 3,
            minHeight: 200,
            bgcolor: 'background.default',
          }}
        >
          <Typography variant="h3" sx={{ mb: 2 }}>
            할 일 목록
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {sourceItems.map((item) => (
              <Paper
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                onDragEnd={handleDragEnd}
                elevation={draggingId === item.id ? 6 : 1}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  p: 1.5,
                  cursor: 'grab',
                  opacity: draggingId === item.id ? 0.4 : 1,
                  transform: draggingId === item.id ? 'scale(0.95)' : 'none',
                  transition: 'opacity 0.2s, transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                  '&:active': {
                    cursor: 'grabbing',
                  },
                }}
              >
                <DragIndicatorIcon color="action" fontSize="small" />
                <Chip label={item.label} color={item.color} size="small" />
              </Paper>
            ))}
            {sourceItems.length === 0 && (
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ py: 4 }}
              >
                모든 아이템이 이동되었습니다.
              </Typography>
            )}
          </Box>
        </Paper>

        {/* 드롭 영역 */}
        <Paper
          variant="outlined"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          sx={{
            flex: 1,
            p: 3,
            minHeight: 200,
            bgcolor: isDragOver ? 'primary.50' : 'background.default',
            borderColor: isDragOver ? 'primary.main' : 'divider',
            borderWidth: isDragOver ? 2 : 1,
            borderStyle: 'dashed',
            transition: 'all 0.2s ease-in-out',
            transform: isDragOver ? 'scale(1.02)' : 'none',
          }}
        >
          <Typography variant="h3" sx={{ mb: 2 }}>
            완료된 작업
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {droppedItems.map((item) => (
              <Paper
                key={item.id}
                elevation={1}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  p: 1.5,
                  animation: 'fadeIn 0.3s ease-in-out',
                  '@keyframes fadeIn': {
                    from: { opacity: 0, transform: 'translateY(-8px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                <Chip label={item.label} color={item.color} size="small" />
                <Chip
                  label="되돌리기"
                  variant="outlined"
                  size="small"
                  onClick={() => handleReturn(item)}
                  sx={{ cursor: 'pointer' }}
                />
              </Paper>
            ))}
            {droppedItems.length === 0 && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  py: 4,
                  color: isDragOver ? 'primary.main' : 'text.secondary',
                  transition: 'color 0.2s',
                }}
              >
                <InboxIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="body2">
                  {isDragOver ? '여기에 놓으세요!' : '아이템을 여기로 드래그하세요'}
                </Typography>
              </Box>
            )}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default DragDropSection;
