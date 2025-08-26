'use client'
import Header from '@/components/Header';
import Navbar from './../components/Navbar';
import About from '@/components/About';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function Home() {

const [isDark,setIsDark]=useState(false);

useEffect(()=>{
if(localStorage.theme==='dark' || (!'theme' in localStorage)&& window.matchMedia('(prefers-color-scheme:dark)').matches){
setIsDark(true)
}else{
setIsDark(false)
}
},[])

useEffect(()=>{
if(isDark){
  document.documentElement.classList.add('dark');
  localStorage.theme='dark';
}
else{
    document.documentElement.classList.remove('dark');
localStorage.theme='';
  }
},[isDark])

  return (
    <>
    <Navbar isDarkMode={isDark} setIsDarkMode={setIsDark}/>
    <Header isDarkMode={isDark} />
    <About isDarkMode={isDark}/>
    <Services isDarkMode={isDark}/>
    <Work isDarkMode={isDark}/>
    <Contact isDarkMode={isDark}/>
    <Footer isDarkMode={isDark}/>
    </>
  );
}
