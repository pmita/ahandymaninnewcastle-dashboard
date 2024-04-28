"use client"

// HOOKS
import { useAuth } from "@/hooks/useAuth";

export const AuthCheck = ( props:any ) => {
  // HOOKS
  const { authedUser } = useAuth();

  return authedUser ? <>{props.children}</> : props.fallback || null;
}