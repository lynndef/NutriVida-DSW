import { PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usarAutenticacao } from '../contexts/AuthContext';

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { credenciais } = usarAutenticacao();
  const { validacao } = usarAutenticacao();
  const navigate = useNavigate();

  useEffect(() => {
    if (!validacao) {
      navigate('/login', { replace: true });
    }
  }, [navigate, credenciais]);

  return <>{credenciais ? children : null}</>;
}
