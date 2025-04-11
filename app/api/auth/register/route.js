// // app/api/auth/register/route.js
// import { NextResponse } from 'next/server';
// import bcrypt from 'bcryptjs';
// import { connectToDB } from '@/lib/db';
// import { User } from '@/models/User';

// export async function POST(request) {
//   try {
//     const { name, email, password } = await request.json();
    
//     if (!name || !email || !password) {
//       return NextResponse.json(
//         { success: false, message: 'Missing required fields' },
//         { status: 400 }
//       );
//     }
    
//     await connectToDB();
    
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return NextResponse.json(
//         { success: false, message: 'User already exists' },
//         { status: 409 }
//       );
//     }
    
//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);
    
//     // Create user
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });
    
//     await newUser.save();
    
//     return NextResponse.json(
//       { success: true, message: 'User registered successfully' },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error('Registration error:', error);
//     return NextResponse.json(
//       { success: false, message: 'Error registering user' },
//       { status: 500 }
//     );
//   }
// }


// app/api/auth/register/route.js
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { User } from '@/models/User';

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return NextResponse.json(
          { success: false, message: 'User already exists' },
          { status: 409 }
        );
      }
      
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Create user
      await User.create({
        name,
        email,
        password: hashedPassword,
      });
      
      return NextResponse.json(
        { success: true, message: 'User registered successfully' },
        { status: 201 }
      );
    } catch (error) {
      console.error('Registration error:', error);
      return NextResponse.json(
        { success: false, message: error.message || 'Error registering user' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, message: 'Error registering user' },
      { status: 500 }
    );
  }
}