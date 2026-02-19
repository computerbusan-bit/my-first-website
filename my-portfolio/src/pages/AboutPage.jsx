import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import SectionTitle from '../components/SectionTitle';

const skills = [
  { icon: <CodeIcon />, title: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS'] },
  { icon: <BrushIcon />, title: 'Design', items: ['Figma', 'MUI', 'Responsive Design', 'UI/UX'] },
  { icon: <StorageIcon />, title: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'REST API'] },
  { icon: <WebIcon />, title: 'Tools', items: ['Git', 'Vite', 'VS Code', 'Vercel'] },
];

function AboutPage() {
  return (
    <>
      {/* About Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <SectionTitle subtitle="저에 대해 간단히 소개합니다">About Me</SectionTitle>
          <Card
            sx={{
              bgcolor: 'background.paper',
              p: { xs: 3, md: 5 },
              textAlign: 'center',
              border: '2px dashed',
              borderColor: 'custom.borderLight',
            }}
          >
            <CardContent>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
                안녕하세요! 저는 웹 개발에 열정을 가진 프론트엔드 개발자입니다.
                사용자 중심의 인터페이스를 설계하고, 깔끔한 코드로 구현하는 것을 좋아합니다.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                React, TypeScript, MUI 등 모던 웹 기술을 활용하여
                반응형이고 접근성 높은 웹 애플리케이션을 만들고 있습니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, color: 'common.white', mb: 1 }}>
              Skills
            </Typography>
            <Typography variant="body1" sx={{ color: 'secondary.main' }}>
              주요 기술 스택입니다
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {skills.map((skill) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={skill.title}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  <Box sx={{ color: 'secondary.main', mb: 2, '& svg': { fontSize: 40 } }}>
                    {skill.icon}
                  </Box>
                  <Typography variant="h6" sx={{ color: 'common.white', mb: 2, fontWeight: 700 }}>
                    {skill.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                    {skill.items.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(255, 105, 180, 0.2)',
                          color: 'common.white',
                          fontWeight: 500,
                          border: '1px solid rgba(255, 105, 180, 0.4)',
                        }}
                      />
                    ))}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default AboutPage;
