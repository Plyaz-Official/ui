import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent } from '@storybook/test';
import { useState } from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components';

type Story = StoryObj<typeof Table>;

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Table` component provides a structured way to display tabular data. It includes all necessary table elements with consistent styling and accessibility features.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the table.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className='text-right'>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className='font-medium'>INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className='text-right'>$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium'>INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className='text-right'>$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium'>INV003</TableCell>
          <TableCell>Unpaid</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className='text-right'>$350.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className='text-right'>$750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const WithInvoices: Story = {
  render: () => {
    const invoices = [
      {
        invoice: 'INV001',
        paymentStatus: 'Paid',
        totalAmount: '$250.00',
        paymentMethod: 'Credit Card',
      },
      {
        invoice: 'INV002',
        paymentStatus: 'Pending',
        totalAmount: '$150.00',
        paymentMethod: 'PayPal',
      },
      {
        invoice: 'INV003',
        paymentStatus: 'Unpaid',
        totalAmount: '$350.00',
        paymentMethod: 'Bank Transfer',
      },
      {
        invoice: 'INV004',
        paymentStatus: 'Paid',
        totalAmount: '$450.00',
        paymentMethod: 'Credit Card',
      },
      {
        invoice: 'INV005',
        paymentStatus: 'Paid',
        totalAmount: '$550.00',
        paymentMethod: 'PayPal',
      },
      {
        invoice: 'INV006',
        paymentStatus: 'Pending',
        totalAmount: '$200.00',
        paymentMethod: 'Bank Transfer',
      },
      {
        invoice: 'INV007',
        paymentStatus: 'Unpaid',
        totalAmount: '$300.00',
        paymentMethod: 'Credit Card',
      },
    ];

    return (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className='text-right'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map(invoice => (
            <TableRow key={invoice.invoice}>
              <TableCell className='font-medium'>{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className='text-right'>{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className='text-right'>$2,250.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  },
};

export const WithUsers: Story = {
  render: () => {
    const users = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Admin',
        status: 'Active',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'User',
        status: 'Active',
      },
      {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob@example.com',
        role: 'User',
        status: 'Inactive',
      },
      {
        id: 4,
        name: 'Alice Brown',
        email: 'alice@example.com',
        role: 'Moderator',
        status: 'Active',
      },
    ];

    return (
      <Table>
        <TableCaption>User management table.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell className='font-medium'>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {user.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export const WithProducts: Story = {
  render: () => {
    const products = [
      {
        id: 'P001',
        name: 'Laptop',
        category: 'Electronics',
        price: 999.99,
        stock: 25,
      },
      {
        id: 'P002',
        name: 'Mouse',
        category: 'Electronics',
        price: 29.99,
        stock: 100,
      },
      {
        id: 'P003',
        name: 'Keyboard',
        category: 'Electronics',
        price: 79.99,
        stock: 50,
      },
      {
        id: 'P004',
        name: 'Monitor',
        category: 'Electronics',
        price: 299.99,
        stock: 15,
      },
    ];

    return (
      <Table>
        <TableCaption>Product inventory table.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className='text-right'>Price</TableHead>
            <TableHead className='text-right'>Stock</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map(product => (
            <TableRow key={product.id}>
              <TableCell className='font-medium'>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell className='text-right'>${product.price}</TableCell>
              <TableCell className='text-right'>{product.stock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total Products</TableCell>
            <TableCell className='text-right'>{products.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  },
};

const WithCheckboxesComponent = () => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const data = [
    { id: '1', name: 'Item 1', value: 100 },
    { id: '2', name: 'Item 2', value: 200 },
    { id: '3', name: 'Item 3', value: 300 },
  ];

  const handleSelectRow = (id: string) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map(item => item.id));
    }
  };

  return (
    <Table>
      <TableCaption>Table with checkboxes for row selection.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[50px]'>
            <input
              type='checkbox'
              checked={selectedRows.length === data.length}
              onChange={handleSelectAll}
              className='rounded border-gray-300'
            />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead className='text-right'>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(item => (
          <TableRow key={item.id}>
            <TableCell>
              <input
                type='checkbox'
                checked={selectedRows.includes(item.id)}
                onChange={() => handleSelectRow(item.id)}
                className='rounded border-gray-300'
              />
            </TableCell>
            <TableCell className='font-medium'>{item.name}</TableCell>
            <TableCell className='text-right'>${item.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Selected: {selectedRows.length}</TableCell>
          <TableCell className='text-right'>
            $
            {data
              .filter(item => selectedRows.includes(item.id))
              .reduce((sum, item) => sum + item.value, 0)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export const WithCheckboxes: Story = {
  render: () => <WithCheckboxesComponent />,
};

const WithActionsComponent = () => {
  const [data, setData] = useState([
    { id: '1', name: 'Item 1', status: 'Active' },
    { id: '2', name: 'Item 2', status: 'Inactive' },
    { id: '3', name: 'Item 3', status: 'Active' },
  ]);

  const handleDelete = (id: string) => {
    setData(prev => prev.filter(item => item.id !== id));
  };

  const handleToggleStatus = (id: string) => {
    setData(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, status: item.status === 'Active' ? 'Inactive' : 'Active' }
          : item
      )
    );
  };

  return (
    <Table>
      <TableCaption>Table with action buttons.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className='text-right'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(item => (
          <TableRow key={item.id}>
            <TableCell className='font-medium'>{item.name}</TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  item.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {item.status}
              </span>
            </TableCell>
            <TableCell className='text-right'>
              <div className='flex justify-end gap-2'>
                <button
                  onClick={() => handleToggleStatus(item.id)}
                  className='px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600'
                >
                  Toggle
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className='px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600'
                >
                  Delete
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const WithActions: Story = {
  render: () => <WithActionsComponent />,
};

const WithSortingComponent = () => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(
    null
  );

  const data = [
    { id: 1, name: 'Alice', age: 25, city: 'New York' },
    { id: 2, name: 'Bob', age: 30, city: 'Los Angeles' },
    { id: 3, name: 'Charlie', age: 22, city: 'Chicago' },
    { id: 4, name: 'Diana', age: 28, city: 'Houston' },
  ];

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig) return 0;

    const aValue = a[sortConfig.key as keyof typeof a];
    const bValue = b[sortConfig.key as keyof typeof b];

    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <Table>
      <TableCaption>Table with sorting functionality.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='cursor-pointer hover:bg-gray-50' onClick={() => handleSort('name')}>
            Name {sortConfig?.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </TableHead>
          <TableHead className='cursor-pointer hover:bg-gray-50' onClick={() => handleSort('age')}>
            Age {sortConfig?.key === 'age' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </TableHead>
          <TableHead className='cursor-pointer hover:bg-gray-50' onClick={() => handleSort('city')}>
            City {sortConfig?.key === 'city' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedData.map(item => (
          <TableRow key={item.id}>
            <TableCell className='font-medium'>{item.name}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>{item.city}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const WithSorting: Story = {
  render: () => <WithSortingComponent />,
};

const WithPaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const data = [
    { id: 1, name: 'Item 1', value: 100 },
    { id: 2, name: 'Item 2', value: 200 },
    { id: 3, name: 'Item 3', value: 300 },
    { id: 4, name: 'Item 4', value: 400 },
    { id: 5, name: 'Item 5', value: 500 },
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className='space-y-4'>
      <Table>
        <TableCaption>Table with pagination.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className='text-right'>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map(item => (
            <TableRow key={item.id}>
              <TableCell className='font-medium'>{item.name}</TableCell>
              <TableCell className='text-right'>${item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className='flex items-center justify-between'>
        <div className='text-sm text-muted-foreground'>
          Showing {startIndex + 1} to {Math.min(endIndex, data.length)} of {data.length} results
        </div>
        <div className='flex items-center space-x-2'>
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className='px-3 py-1 text-sm border rounded disabled:opacity-50'
          >
            Previous
          </button>
          <span className='text-sm'>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className='px-3 py-1 text-sm border rounded disabled:opacity-50'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export const WithPagination: Story = {
  render: () => <WithPaginationComponent />,
};

export const WithCustomStyling: Story = {
  render: () => (
    <Table className='border border-gray-200 rounded-lg'>
      <TableCaption>A styled table with custom borders.</TableCaption>
      <TableHeader>
        <TableRow className='bg-gray-50'>
          <TableHead className='font-semibold'>Product</TableHead>
          <TableHead className='font-semibold'>Price</TableHead>
          <TableHead className='font-semibold'>Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className='hover:bg-blue-50'>
          <TableCell className='font-medium'>Laptop</TableCell>
          <TableCell className='text-green-600 font-semibold'>$999.99</TableCell>
          <TableCell className='text-right'>25</TableCell>
        </TableRow>
        <TableRow className='hover:bg-blue-50'>
          <TableCell className='font-medium'>Mouse</TableCell>
          <TableCell className='text-green-600 font-semibold'>$29.99</TableCell>
          <TableCell className='text-right'>100</TableCell>
        </TableRow>
        <TableRow className='hover:bg-blue-50'>
          <TableCell className='font-medium'>Keyboard</TableCell>
          <TableCell className='text-green-600 font-semibold'>$79.99</TableCell>
          <TableCell className='text-right'>50</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithEmptyState: Story = {
  render: () => (
    <Table>
      <TableCaption>Table with no data.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3} className='text-center py-8 text-muted-foreground'>
            No data available
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

const THREE = 3;
const ARRAY_OF_THREE = [1, 2, THREE];
export const WithLoadingState: Story = {
  render: () => (
    <Table>
      <TableCaption>Table with loading state.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ARRAY_OF_THREE.map(i => (
          <TableRow key={i}>
            <TableCell>
              <div className='h-4 bg-gray-200 rounded animate-pulse' />
            </TableCell>
            <TableCell>
              <div className='h-4 bg-gray-200 rounded animate-pulse' />
            </TableCell>
            <TableCell>
              <div className='h-4 bg-gray-200 rounded animate-pulse' />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithResponsiveDesign: Story = {
  render: () => (
    <div className='overflow-x-auto'>
      <Table className='min-w-[600px]'>
        <TableCaption>Responsive table that scrolls horizontally on small screens.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>1</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>+1 234 567 8900</TableCell>
            <TableCell>123 Main St</TableCell>
            <TableCell>New York</TableCell>
            <TableCell>USA</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>2</TableCell>
            <TableCell>Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>+1 234 567 8901</TableCell>
            <TableCell>456 Oak Ave</TableCell>
            <TableCell>Los Angeles</TableCell>
            <TableCell>USA</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};

export const WithAccessibility: Story = {
  render: () => (
    <Table>
      <TableCaption>A table with proper accessibility features.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead scope='col'>Product Name</TableHead>
          <TableHead scope='col'>Price</TableHead>
          <TableHead scope='col'>Availability</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell scope='row' className='font-medium'>
            Laptop
          </TableCell>
          <TableCell>$999.99</TableCell>
          <TableCell>In Stock</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row' className='font-medium'>
            Mouse
          </TableCell>
          <TableCell>$29.99</TableCell>
          <TableCell>In Stock</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope='row' className='font-medium'>
            Keyboard
          </TableCell>
          <TableCell>$79.99</TableCell>
          <TableCell>Out of Stock</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithPerformance: Story = {
  render: () => {
    const largeDataset = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
      value: Math.floor(Math.random() * 1000),
      category: ['A', 'B', 'C'][i % THREE],
    }));

    return (
      <Table>
        <TableCaption>Large dataset table (100 rows) for performance testing.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {largeDataset.map(item => (
            <TableRow key={item.id}>
              <TableCell className='font-medium'>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>${item.value}</TableCell>
              <TableCell>{item.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

const WithUserInteractionComponent = () => {
  const [selectedRow, setSelectedRow] = useState<string | null>(null);

  const data = [
    { id: '1', name: 'Item 1', value: 100 },
    { id: '2', name: 'Item 2', value: 200 },
    { id: '3', name: 'Item 3', value: 300 },
  ];

  return (
    <Table>
      <TableCaption>Click on rows to select them.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className='text-right'>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(item => (
          <TableRow
            key={item.id}
            className={`cursor-pointer ${selectedRow === item.id ? 'bg-blue-100' : ''}`}
            onClick={() => setSelectedRow(selectedRow === item.id ? null : item.id)}
          >
            <TableCell className='font-medium'>{item.name}</TableCell>
            <TableCell className='text-right'>${item.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {selectedRow && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} className='text-center'>
              Selected: {data.find(item => item.id === selectedRow)?.name}
            </TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
};

export const WithUserInteraction: Story = {
  render: () => <WithUserInteractionComponent />,
  play: async ({ canvas }) => {
    const firstRow = canvas.getByText('Item 1').closest('tr');
    await userEvent.click(firstRow!);
    await expect(firstRow).toHaveClass('bg-blue-100');
  },
};
