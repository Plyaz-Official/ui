import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent } from '@storybook/test';
import { useState, useEffect } from 'react';

import { Progress, Button } from '@/components';
import { NUMERIC_CONSTANTS } from '@/constants/constant';

type Story = StoryObj<typeof Progress>;

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Progress` component is a visual indicator that shows the completion status of a task or process. It provides a way to display progress with a customizable bar. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The current progress value (0-100).',
    },
    max: {
      control: 'number',
      description: 'The maximum value of the progress.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the progress bar.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => <Progress value={33} />,
};

export const HalfProgress: Story = {
  render: () => <Progress value={NUMERIC_CONSTANTS.FIFTY} />,
};

export const AlmostComplete: Story = {
  render: () => <Progress value={90} />,
};

export const Complete: Story = {
  render: () => <Progress value={100} />,
};

export const ZeroProgress: Story = {
  render: () => <Progress value={0} />,
};

const AnimatedProgressComponent = () => {
  const [progress, setProgress] = useState(0);
  const FIVE_HUNDRED = NUMERIC_CONSTANTS.FIVE_HUNDRED;
  const SIXTY_SIX = NUMERIC_CONSTANTS.SIXTY_SIX;
  useEffect(() => {
    const timer = setTimeout(() => setProgress(SIXTY_SIX), FIVE_HUNDRED);
    return () => clearTimeout(timer);
  }, [FIVE_HUNDRED, SIXTY_SIX]);

  return <Progress value={progress} />;
};

export const AnimatedProgress: Story = {
  render: () => <AnimatedProgressComponent />,
};

export const WithCustomStyling: Story = {
  render: () => <Progress value={75} className='h-4' />,
};

export const WithCustomIndicator: Story = {
  render: () => <Progress value={60} className='h-3' />,
};

export const LargeSize: Story = {
  render: () => <Progress value={40} className='h-6' />,
};

export const SmallSize: Story = {
  render: () => <Progress value={80} className='h-1' />,
};

export const WithLabel: Story = {
  render: () => (
    <div className='space-y-2'>
      <div className='flex justify-between text-sm'>
        <span>Progress</span>
        <span>75%</span>
      </div>
      <Progress value={75} />
    </div>
  ),
};

export const WithMultipleSteps: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <div className='flex justify-between text-sm mb-1'>
          <span>Step 1: Setup</span>
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
      <div>
        <div className='flex justify-between text-sm mb-1'>
          <span>Step 2: Configuration</span>
          <span>60%</span>
        </div>
        <Progress value={60} />
      </div>
      <div>
        <div className='flex justify-between text-sm mb-1'>
          <span>Step 3: Deployment</span>
          <span>0%</span>
        </div>
        <Progress value={0} />
      </div>
    </div>
  ),
};

export const WithCustomColors: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <div className='text-sm mb-1'>Success Progress</div>
        <Progress value={80} className='bg-accent' />
      </div>
      <div>
        <div className='text-sm mb-1'>Warning Progress</div>
        <Progress value={60} className='bg-muted' />
      </div>
      <div>
        <div className='text-sm mb-1'>Error Progress</div>
        <Progress value={30} className='bg-destructive' />
      </div>
    </div>
  ),
};

const InteractiveProgressComponent = () => {
  const [progress, setProgress] = useState(0);

  const handleIncrement = () => {
    setProgress(prev => Math.min(100, prev + 10));
  };

  const handleDecrement = () => {
    setProgress(prev => Math.max(0, prev - 10));
  };

  const handleReset = () => {
    setProgress(0);
  };

  return (
    <div className='space-y-4'>
      <div className='flex justify-between text-sm'>
        <span>Interactive Progress</span>
        <span>{progress}%</span>
      </div>
      <Progress value={progress} />
      <div className='flex gap-2'>
        <Button onClick={handleDecrement} disabled={progress === 0}>
          -10%
        </Button>
        <Button onClick={handleIncrement} disabled={progress === 100}>
          +10%
        </Button>
        <Button onClick={handleReset} variant='outline'>
          Reset
        </Button>
      </div>
    </div>
  );
};

export const InteractiveProgress: Story = {
  render: () => <InteractiveProgressComponent />,
};

const SimulatedLoadingComponent = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
    setProgress(0);
    const TWO_HUNDRED = NUMERIC_CONSTANTS.TWO_HUNDRED;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, TWO_HUNDRED);
  };

  return (
    <div className='space-y-4'>
      <div className='flex justify-between text-sm'>
        <span>Loading Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} />
      <Button onClick={startLoading} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Start Loading'}
      </Button>
    </div>
  );
};

export const SimulatedLoading: Story = {
  render: () => <SimulatedLoadingComponent />,
};

export const WithSteps: Story = {
  render: () => {
    const steps = [
      { name: 'Account Setup', progress: 100 },
      { name: 'Profile Information', progress: 80 },
      { name: 'Preferences', progress: 40 },
      { name: 'Verification', progress: 0 },
    ];

    return (
      <div className='space-y-6'>
        {steps.map((step, index) => (
          <div key={index} className='space-y-2'>
            <div className='flex justify-between text-sm'>
              <span>{step.name}</span>
              <span>{step.progress}%</span>
            </div>
            <Progress value={step.progress} />
          </div>
        ))}
      </div>
    );
  },
};

export const WithCustomMax: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <div className='flex justify-between text-sm mb-1'>
          <span>Progress (0-50)</span>
          <span>25/50</span>
        </div>
        <Progress value={NUMERIC_CONSTANTS.TWENTY_FIVE} max={NUMERIC_CONSTANTS.FIFTY} />
      </div>
      <div>
        <div className='flex justify-between text-sm mb-1'>
          <span>Progress (0-200)</span>
          <span>150/200</span>
        </div>
        <Progress value={150} max={NUMERIC_CONSTANTS.TWO_HUNDRED} />
      </div>
    </div>
  ),
};

const UserInteractionComponent = () => {
  const FIVE_HUNDRED = NUMERIC_CONSTANTS.FIVE_HUNDRED;
  const [progress, setProgress] = useState<number>(FIVE_HUNDRED);

  return (
    <div className='space-y-4'>
      <div className='flex justify-between text-sm'>
        <span>Interactive Progress</span>
        <span>{progress}%</span>
      </div>
      <Progress value={progress} />
      <div className='flex gap-2'>
        <Button onClick={() => setProgress(Math.max(0, progress - 10))} disabled={progress === 0}>
          Decrease
        </Button>
        <Button
          onClick={() => setProgress(Math.min(100, progress + 10))}
          disabled={progress === 100}
        >
          Increase
        </Button>
      </div>
    </div>
  );
};

export const UserInteraction: Story = {
  render: () => <UserInteractionComponent />,
  play: async ({ canvas }) => {
    const increaseButton = await canvas.findByText('Increase');
    await userEvent.click(increaseButton);
    await expect(canvas.getByText('60%')).toBeInTheDocument();
  },
};
