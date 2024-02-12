import Image from 'next/image';
import Link from 'next/link';
import StudentInfo from './StudentInfo';
import React from 'react';

export default function Home() {
  return (
    <main style={styles.container}>
      <img src="/pictures/profilepic.ppg" alt="Profile" />
      <h1 style={styles.header}>Ahmed's Portfolio</h1>
      <StudentInfo />
    </main>
  );
}
const ProfileComponent = () => {
  return (
    <div>
      <Image src={profilepic} alt="Picture of the author" width={500} height={500} />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    padding: '40px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '40px auto',
    textAlign: 'center'
  },
  header: {
    color: '#2c3e50',
    marginBottom: '30px'
  },
  linkContainer: {
    margin: '10px 0'
  },
  link: {
    display: 'inline-block',
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s'
  }
};
