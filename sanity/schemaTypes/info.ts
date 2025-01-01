export const Product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      description: 'Name of the product',
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      description: 'Upload an image of the product',
      options: {
        hotspot: true, 
      },
    },
    {
      name: 'details',
      title: 'Product Details',
      type: 'text',
      description: 'Detailed description of the product',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the product',
      validation: (Rule: import('sanity').Rule) =>
        Rule.min(0).error('Price must be a positive number'),
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      description: 'Available sizes for the product',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
          { title: 'XLarge', value: 'xlarge' },
        ],
        layout: 'radio', 
      },
    },
    {
      name: 'stock',
      title: 'Product In Stock',
      type: 'boolean',
    }
  ],
};
