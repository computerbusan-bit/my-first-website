import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import SectionTitle from '../components/SectionTitle';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'secondary.main',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <Box
          sx={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 200,
            height: 200,
            borderRadius: '50%',
            bgcolor: 'info.main',
            opacity: 0.3,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -40,
            left: -40,
            width: 150,
            height: 150,
            borderRadius: '50%',
            bgcolor: 'error.main',
            opacity: 0.3,
          }}
        />
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography
            variant="body1"
            sx={{ color: 'primary.main', fontWeight: 700, mb: 1, fontSize: '1.1rem' }}
          >
            안녕하세요, 반갑습니다
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 900,
              color: 'primary.main',
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Creative Developer
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: 'common.white', mb: 4, fontWeight: 400, lineHeight: 1.6 }}
          >
            사용자 경험을 중심으로 아름답고 기능적인 웹을 만듭니다.
            <br />
            포트폴리오 작품들이 들어갈 예정입니다.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/projects"
              sx={{
                bgcolor: 'primary.main',
                color: 'common.white',
                px: 4,
                py: 1.5,
                fontWeight: 700,
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              프로젝트 보기
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#contact"
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                fontWeight: 700,
                '&:hover': {
                  bgcolor: 'rgba(74, 26, 138, 0.1)',
                  borderColor: 'primary.main',
                },
              }}
            >
              연락하기
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="sm">
          <SectionTitle subtitle="언제든 연락 주세요">Contact</SectionTitle>
          <Card sx={{ textAlign: 'center', p: { xs: 3, md: 5 } }}>
            <CardContent>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
                프로젝트 협업이나 문의사항이 있으시면
                아래 채널로 편하게 연락해 주세요.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<EmailIcon />}
                  href="mailto:hello@example.com"
                  sx={{ px: 3 }}
                >
                  Email
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  href="https://github.com"
                  target="_blank"
                  sx={{
                    px: 3,
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'rgba(74, 26, 138, 0.05)' },
                  }}
                >
                  GitHub
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;
