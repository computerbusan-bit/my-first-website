import { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';

const cards = [
  {
    id: 1,
    title: 'AI 이미지 생성',
    description: '텍스트 프롬프트를 기반으로 고품질 이미지를 생성하는 AI 기술을 만나보세요.',
    image: 'https://picsum.photos/seed/ai1/400/200',
  },
  {
    id: 2,
    title: '자연어 처리',
    description: '대화형 AI로 자연스러운 텍스트 생성과 분석을 경험해 보세요.',
    image: 'https://picsum.photos/seed/ai2/400/200',
  },
  {
    id: 3,
    title: '데이터 분석',
    description: 'AI 기반 데이터 분석으로 비즈니스 인사이트를 도출하세요.',
    image: 'https://picsum.photos/seed/ai3/400/200',
  },
  {
    id: 4,
    title: '음성 인식',
    description: '최신 음성 인식 기술로 음성을 텍스트로 변환하세요.',
    image: 'https://picsum.photos/seed/ai4/400/200',
  },
];

const CardSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <Box>
      <Typography variant="h2" align="center" gutterBottom>
        AI 서비스
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        다양한 AI 기술을 활용한 서비스를 살펴보세요.
      </Typography>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={card.id}>
            <Card
              elevation={hoveredId === card.id ? 8 : 1}
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                transform: hoveredId === card.id ? 'translateY(-4px)' : 'none',
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={card.image}
                alt={card.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h3" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button size="small" variant="contained">
                  자세히 보기
                </Button>
                <Button size="small" variant="outlined">
                  공유
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardSection;
