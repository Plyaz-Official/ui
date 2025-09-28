import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Slider } from '@/components';
import { NUMERIC_CONSTANTS } from '@/constants/constant';

type Story = StoryObj<typeof Slider>;

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Slider` component provides a range input control for selecting values. It is built with Radix UI and styled with Tailwind CSS, offering a flexible and accessible slider solution.',
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: 'object',
      description: 'The default value of the slider.',
    },
    value: {
      control: 'object',
      description: 'The controlled value of the slider.',
    },
    min: {
      control: 'number',
      description: 'The minimum value of the slider.',
    },
    max: {
      control: 'number',
      description: 'The maximum value of the slider.',
    },
    step: {
      control: 'number',
      description: 'The step value of the slider.',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the slider.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the slider.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => <Slider defaultValue={[NUMERIC_CONSTANTS.FIFTY]} max={100} step={1} />,
};

export const WithValue: Story = {
  render: () => <Slider value={[NUMERIC_CONSTANTS.SEVENTY_FIVE]} max={100} step={1} />,
};

export const Range: Story = {
  render: () => (
    <Slider
      defaultValue={[NUMERIC_CONSTANTS.TWENTY, NUMERIC_CONSTANTS.EIGHTY]}
      max={100}
      step={1}
    />
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className='h-64'>
      <Slider
        defaultValue={[NUMERIC_CONSTANTS.FIFTY]}
        max={100}
        step={1}
        orientation='vertical'
        className='h-full'
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => <Slider defaultValue={[NUMERIC_CONSTANTS.FIFTY]} max={100} step={1} disabled />,
};

const WithLabelsComponent = () => {
  const [value, setValue] = useState<number[]>([NUMERIC_CONSTANTS.FIFTY]);

  return (
    <div className='space-y-4'>
      <div className='flex justify-between text-sm text-muted-foreground'>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <Slider value={value} onValueChange={setValue} max={100} step={1} className='w-full' />
      <div className='text-center text-sm'>Current value: {value[0]}</div>
    </div>
  );
};

export const WithLabels: Story = {
  render: () => <WithLabelsComponent />,
};

const WithMarksComponent = () => {
  const [value, setValue] = useState<number[]>([NUMERIC_CONSTANTS.FIFTY]);
  const marks = [
    0,
    NUMERIC_CONSTANTS.TWENTY_FIVE,
    NUMERIC_CONSTANTS.FIFTY,
    NUMERIC_CONSTANTS.SEVENTY_FIVE,
    100,
  ];

  return (
    <div className='space-y-4'>
      <div className='relative'>
        <Slider value={value} onValueChange={setValue} max={100} step={1} className='w-full' />
        <div className='absolute top-6 left-0 right-0 flex justify-between'>
          {marks.map(mark => (
            <div
              key={mark}
              className='flex flex-col items-center'
              style={{ left: `${mark}%`, transform: 'translateX(-50%)' }}
            >
              <div className='w-1 h-3 bg-muted-foreground rounded-full' />
              <span className='text-xs text-muted-foreground mt-1'>{mark}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='text-center text-sm'>Value: {value[0]}</div>
    </div>
  );
};

export const WithMarks: Story = {
  render: () => <WithMarksComponent />,
};

export const WithCustomColors: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <label htmlFor='primary-slider' className='text-sm font-medium'>
          Primary
        </label>
        <Slider id='primary-slider' defaultValue={[NUMERIC_CONSTANTS.FIFTY]} max={100} step={1} />
      </div>
      <div>
        <label htmlFor='secondary-slider' className='text-sm font-medium'>
          Secondary
        </label>
        <Slider
          id='secondary-slider'
          defaultValue={[NUMERIC_CONSTANTS.FIFTY]}
          max={100}
          step={1}
          className='[&_[data-slot=slider-range]]:bg-secondary'
        />
      </div>
      <div>
        <label htmlFor='accent-slider' className='text-sm font-medium'>
          Accent
        </label>
        <Slider
          id='accent-slider'
          defaultValue={[NUMERIC_CONSTANTS.FIFTY]}
          max={100}
          step={1}
          className='[&_[data-slot=slider-range]]:bg-accent'
        />
      </div>
      <div>
        <label htmlFor='destructive-slider' className='text-sm font-medium'>
          Destructive
        </label>
        <Slider
          id='destructive-slider'
          defaultValue={[NUMERIC_CONSTANTS.FIFTY]}
          max={100}
          step={1}
          className='[&_[data-slot=slider-range]]:bg-destructive'
        />
      </div>
    </div>
  ),
};

export const WithCustomSizes: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <label htmlFor='small-slider' className='text-sm font-medium'>
          Small
        </label>
        <Slider
          id='small-slider'
          defaultValue={[NUMERIC_CONSTANTS.FIFTY]}
          max={100}
          step={1}
          className='[&_[data-slot=slider-track]]:h-1 [&_[data-slot=slider-thumb]]:size-3'
        />
      </div>
      <div>
        <label htmlFor='medium-slider' className='text-sm font-medium'>
          Medium
        </label>
        <Slider id='medium-slider' defaultValue={[NUMERIC_CONSTANTS.FIFTY]} max={100} step={1} />
      </div>
      <div>
        <label htmlFor='large-slider' className='text-sm font-medium'>
          Large
        </label>
        <Slider
          id='large-slider'
          defaultValue={[NUMERIC_CONSTANTS.FIFTY]}
          max={100}
          step={1}
          className='[&_[data-slot=slider-track]]:h-2 [&_[data-slot=slider-thumb]]:size-6'
        />
      </div>
    </div>
  ),
};

const WithMultipleValuesComponent = () => {
  const [value, setValue] = useState<number[]>([
    NUMERIC_CONSTANTS.TWENTY,
    NUMERIC_CONSTANTS.EIGHTY,
  ]);

  return (
    <div className='space-y-4'>
      <Slider value={value} onValueChange={setValue} max={100} step={1} className='w-full' />
      <div className='flex justify-between text-sm'>
        <span>Min: {value[0]}</span>
        <span>Max: {value[1]}</span>
      </div>
    </div>
  );
};

export const WithMultipleValues: Story = {
  render: () => <WithMultipleValuesComponent />,
};

const WithFormComponent = () => {
  const [formData, setFormData] = useState<{
    volume: number[];
    brightness: number[];
    contrast: number[];
  }>({
    volume: [NUMERIC_CONSTANTS.FIFTY],
    brightness: [NUMERIC_CONSTANTS.SEVENTY_FIVE],
    contrast: [NUMERIC_CONSTANTS.SIXTY],
  });

  return (
    <form className='space-y-6'>
      <div className='space-y-2'>
        <label htmlFor='volume-slider' className='text-sm font-medium'>
          Volume
        </label>
        <Slider
          id='volume-slider'
          value={formData.volume}
          onValueChange={value => setFormData(prev => ({ ...prev, volume: value }))}
          max={100}
          step={1}
          className='w-full'
        />
        <div className='text-sm text-muted-foreground'>{formData.volume[0]}%</div>
      </div>

      <div className='space-y-2'>
        <label htmlFor='brightness-slider' className='text-sm font-medium'>
          Brightness
        </label>
        <Slider
          id='brightness-slider'
          value={formData.brightness}
          onValueChange={value => setFormData(prev => ({ ...prev, brightness: value }))}
          max={100}
          step={1}
          className='w-full'
        />
        <div className='text-sm text-muted-foreground'>{formData.brightness[0]}%</div>
      </div>

      <div className='space-y-2'>
        <label htmlFor='contrast-slider' className='text-sm font-medium'>
          Contrast
        </label>
        <Slider
          id='contrast-slider'
          value={formData.contrast}
          onValueChange={value => setFormData(prev => ({ ...prev, contrast: value }))}
          max={100}
          step={1}
          className='w-full'
        />
        <div className='text-sm text-muted-foreground'>{formData.contrast[0]}%</div>
      </div>
    </form>
  );
};

export const WithForm: Story = {
  render: () => <WithFormComponent />,
};

export const WithAccessibility: Story = {
  render: () => (
    <div className='space-y-4'>
      <Slider
        defaultValue={[NUMERIC_CONSTANTS.FIFTY]}
        max={100}
        step={1}
        aria-label='Volume control'
        className='w-full'
      />
      <div className='text-sm text-muted-foreground'>
        This slider is accessible with screen readers and keyboard navigation
      </div>
    </div>
  ),
};
