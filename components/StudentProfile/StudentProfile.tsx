'use client'
import React, { useState } from 'react'
import {student} from './studentData'
import Image from 'next/image';

const StudentProfile = () => {
    const [data, setData] = useState(student);

  return (
    <>
        <div>
            <span>Hello</span>
            
        </div>
    </>
  )
}

export default StudentProfile