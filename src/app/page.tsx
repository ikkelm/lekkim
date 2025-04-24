'use client';

import {Button} from '@/components/ui/button';
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
import {useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

export default function Home() {
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen p-4 md:p-8 justify-center bg-black text-white">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">Mikkel Wulff</h1>
        <p className="text-gray-400 text-center"></p>
      </header>

      <section className="flex items-center justify-center">
        <Card className="bg-gray-800 shadow-xl border-none">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-white">Säg hej!</CardTitle>
            <CardDescription className="text-gray-300">Get in touch with me.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3 text-gray-300">Email: hey@mikkelwulff</p>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">
                  {isPhoneVisible ? '+46706483265' : 'Show Phone Number'}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-gray-700">
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action reveals my phone number. Are you sure you want to proceed?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => setIsPhoneVisible(true)}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
