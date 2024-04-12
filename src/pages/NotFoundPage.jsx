import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Section } from '../components/Section/Section';
import { Container } from '../components/Container/Container';

const NotFoundPage = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (timer === 5) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <Section>
        <Container>
          <h1>Page you visited doesn&apos;t exist.</h1>
          <h2>You will be redirected to Home in {5 - timer} seconds</h2>
          <Link to="/">Go Home</Link>
        </Container>
      </Section>
    </div>
  );
};

export default NotFoundPage;
