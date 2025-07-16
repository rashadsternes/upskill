import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Apple from "next-auth/providers/apple"
import Instagram from "next-auth/providers/instagram"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Apple, Instagram],
});
