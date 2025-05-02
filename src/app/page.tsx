'use client';

import Navbar from '@/components/ui/Navbar'
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
   <>
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const encodedEmail = 'aGV5QG1pa2tlbHd1bGZmLnNl'; // hey@mikkelwulff.se
    const encodedPhone = 'KzQ2NzA2NDgzMjY1';            // +46706483265

    setEmail(atob(encodedEmail));
    setPhone(atob(encodedPhone));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      {/* Main content centered vertically */}
      <main className="flex flex-1 items-center justify-center p-6 md:p-12">
        <div className="inline-block text-left">
          <h1 className="uppercase text-8xl md:text-9xl font-display font-bold tracking-tight">
            Mikkel Wulff
          </h1>

          <Card className="bg-black shadow-xl border-none w-fit mt-12">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">
                Tjena mors! Hör av dig vetja, det blir kul! &#128075;
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-300 font-bold">
                <b>Email:</b>{' '}
                {email ? (
                  <a href={`mailto:${email}`} className="hover:text-gray-100 font-bold">
                    {email}
                  </a>
                ) : (
                  <em>Loading…</em>
                )}
              </p>
              <p className="mb-3 text-gray-300 font-bold">
                <b>Nummer:</b>{' '}
                {phone ? (
                  <a href={`tel:${phone}`} className="hover:text-gray-100 font-bold">
                    {phone.replace(/(\+?\d{2})(\d{4})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')}
                  </a>
                ) : (
                  <em>Loading…</em>
                )}
              </p>
              <p className="mb-3 text-gray-300 font-bold">
                <b>LinkedIn:</b>{' '}
                <a
                  href="https://www.linkedin.com/in/mikkelwulff/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-100 font-bold"
                >
                  Här!
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Navbar />

      {/* Footer at bottom */}
      <footer className="py-4 w-full text-center text-xs text-gray-500">
        © {currentYear} by december productions.
      </footer>
    </div>
  );
}
