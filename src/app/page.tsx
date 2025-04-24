'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger} from '@/components/ui/alert-dialog';
import {useState} from 'react';

export default function Home() {
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);

  return (
    <div className="flex flex-col min-h-screen p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Mikkel Wulff</h1>
        <p className="text-muted-foreground">
          A portfolio showcasing projects and contact information.
        </p>
      </header>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Get in touch with me.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Email: hey@mikkelwulff</p>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">
                  {isPhoneVisible ? '+46706483265' : 'Show Phone Number'}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
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

      <section>
        <h2>Projects</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:scale-105 transition-transform">
            <CardHeader>
              <CardTitle>Project 1</CardTitle>
              <CardDescription>A brief description of Project 1.</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="#"
                className="text-accent hover:underline"
              >
                View Project
              </a>
            </CardContent>
          </Card>

          <Card className="hover:scale-105 transition-transform">
            <CardHeader>
              <CardTitle>Project 2</CardTitle>
              <CardDescription>A brief description of Project 2.</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="#"
                className="text-accent hover:underline"
              >
                View Project
              </a>
            </CardContent>
          </Card>

          <Card className="hover:scale-105 transition-transform">
            <CardHeader>
              <CardTitle>Project 3</CardTitle>
              <CardDescription>A brief description of Project 3.</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="#"
                className="text-accent hover:underline"
              >
                View Project
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

