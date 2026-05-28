import { promises as fs } from 'fs';
import path from 'path';

// Data directory
const DATA_DIR = path.join(process.cwd(), 'data');

// File paths
const PRODUCTS_FILE = path.join(DATA_DIR, 'products.json');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');

// Interfaces
export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  badge?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Order {
  id: string;
  commerceOrder: string;
  productId: string;
  productName: string;
  price: number;
  customerEmail: string;
  customerName?: string;
  status: 'pending' | 'paid' | 'failed' | 'shipped';
  flowToken?: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

// Helper functions
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

async function readJsonFile<T>(filePath: string, defaultData: T): Promise<T> {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return defaultData;
  }
}

async function writeJsonFile<T>(filePath: string, data: T): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

// Product operations
export async function getProducts(): Promise<Product[]> {
  return readJsonFile<Product[]>(PRODUCTS_FILE, []);
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find(p => p.id === id);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find(p => p.slug === slug);
}

export async function createProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
  const products = await getProducts();
  const newProduct: Product = {
    ...product,
    id: `prod_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  products.push(newProduct);
  await writeJsonFile(PRODUCTS_FILE, products);
  return newProduct;
}

export async function updateProduct(id: string, updates: Partial<Product>): Promise<Product | undefined> {
  const products = await getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return undefined;
  
  products[index] = {
    ...products[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  await writeJsonFile(PRODUCTS_FILE, products);
  return products[index];
}

export async function deleteProduct(id: string): Promise<boolean> {
  const products = await getProducts();
  const filtered = products.filter(p => p.id !== id);
  if (filtered.length === products.length) return false;
  await writeJsonFile(PRODUCTS_FILE, filtered);
  return true;
}

// Order operations
export async function getOrders(): Promise<Order[]> {
  return readJsonFile<Order[]>(ORDERS_FILE, []);
}

export async function getOrderById(id: string): Promise<Order | undefined> {
  const orders = await getOrders();
  return orders.find(o => o.id === id);
}

export async function getOrderByCommerceOrder(commerceOrder: string): Promise<Order | undefined> {
  const orders = await getOrders();
  return orders.find(o => o.commerceOrder === commerceOrder);
}

export async function createOrder(order: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<Order> {
  const orders = await getOrders();
  const newOrder: Order = {
    ...order,
    id: `ord_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  orders.push(newOrder);
  await writeJsonFile(ORDERS_FILE, orders);
  return newOrder;
}

export async function updateOrder(id: string, updates: Partial<Order>): Promise<Order | undefined> {
  const orders = await getOrders();
  const index = orders.findIndex(o => o.id === id);
  if (index === -1) return undefined;
  
  orders[index] = {
    ...orders[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  await writeJsonFile(ORDERS_FILE, orders);
  return orders[index];
}

export async function updateOrderByCommerceOrder(commerceOrder: string, updates: Partial<Order>): Promise<Order | undefined> {
  const orders = await getOrders();
  const index = orders.findIndex(o => o.commerceOrder === commerceOrder);
  if (index === -1) return undefined;
  
  orders[index] = {
    ...orders[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  await writeJsonFile(ORDERS_FILE, orders);
  return orders[index];
}
