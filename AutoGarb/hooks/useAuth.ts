// hooks/useAuth.ts
import { useState } from 'react';
import * as SecureStore from 'expo-secure-store';
// Assume you're using a backend like Firebase; replace with your API

export default function useAuth() {
  const [user, setUser] = useState(null);

  const signUp = async (email: string, password: string) => {
    // Example: Call your backend API
    // const response = await fetch('your-api/signup', { method: 'POST', body: JSON.stringify({ email, password }) });
    // if (!response.ok) throw new Error('Sign-up failed');
    // const data = await response.json();
    const token = 'example-token'; // Replace with real token from API
    await SecureStore.setItemAsync('userToken', token);
    setUser({ email }); // Store user data
  };

  const signIn = async (email: string, password: string) => {
    // Similar to signUp, but for login endpoint
    const token = 'example-token';
    await SecureStore.setItemAsync('userToken', token);
    setUser({ email });
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync('userToken');
    setUser(null);
  };

  return { user, signUp, signIn, signOut };
}
