import NextAuth from "next-auth";

declare module "next-auth" {
  type Session = {
    id: string;
  }

  type JWT = {
    id: string;
  }
}