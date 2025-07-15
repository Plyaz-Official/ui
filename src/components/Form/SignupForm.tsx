import { useState } from 'react';

import { Box } from '@/components/Box/Box';
import { Heading } from '@/components/Heading/Heading';
import { cn } from '@/lib/utils';

export const SignupForm = () => {
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    name?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormFields(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!formFields.name) newErrors.name = 'Name is required';
    if (!formFields.email) newErrors.email = 'Email is required';
    if (!formFields.password) newErrors.password = 'Password is required';
    else if (formFields.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.info('Form submitted', formFields);
    }
    console.info('Form submitteding', formFields);
  };

  return (
    <Box className='bg-white shadow-md mx-auto p-6 rounded w-full max-w-md'>
      <Heading element='h2' size='xl' className='mb-4 font-bold text-center'>
        Sign Up
      </Heading>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <Box>
          <label
            htmlFor='name'
            className={`
            block text-sm font-medium text-gray-700
          `}
          >
            Name
          </label>
          <input
            id='name'
            type='name'
            value={formFields.name}
            onChange={handleChange}
            className={cn(
              `block shadow-sm mt-1 px-4 py-2 border focus:border-blue-500 rounded-md focus:ring-blue-500 w-full`,
              {
                'border-red-500': errors.name,
                'border-gray-300': !errors.name,
              }
            )}
          />
          {errors.name && <p className='mt-1 text-red-600 text-sm'>{errors.name}</p>}
        </Box>
        <Box>
          <label
            htmlFor='email'
            className={`
            block text-sm font-medium text-gray-700
          `}
          >
            Email
          </label>
          <input
            id='email'
            type='email'
            value={formFields.email}
            onChange={handleChange}
            className={`
              mt-1 block w-full border px-4 py-2
              ${errors.email ? 'border-red-500' : 'border-gray-300'}
              rounded-md shadow-sm
              focus:border-blue-500 focus:ring-blue-500
            `}
          />
          {errors.email && <p className='mt-1 text-red-600 text-sm'>{errors.email}</p>}
        </Box>

        <Box>
          <label
            htmlFor='password'
            className={`
            block text-sm font-medium text-gray-700
          `}
          >
            Password
          </label>
          <input
            id='password'
            type='password'
            value={formFields.password}
            onChange={handleChange}
            className={`
              mt-1 block w-full border px-4 py-2
              ${errors.password ? 'border-red-500' : 'border-gray-300'}
              rounded-md shadow-sm
              focus:border-blue-500 focus:ring-blue-500
            `}
          />
          {errors.password && <p className='mt-1 text-red-600 text-sm'>{errors.password}</p>}
        </Box>

        <button
          type='submit'
          className={`
            w-full rounded-md bg-blue-600 px-4 py-2 text-white transition
            hover:bg-blue-700
            dark:bg-amber-800
          `}
        >
          Sign up
        </button>
      </form>
    </Box>
  );
};
