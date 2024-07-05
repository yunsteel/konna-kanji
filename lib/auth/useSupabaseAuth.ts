import { useEffect } from 'react'
import { supabase } from '../supabase'
import { useAuthStore } from '@/stores/authStore'

export const useSupabaseAuth = () => {
  const setSession = useAuthStore((state) => state.setSession)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
}
