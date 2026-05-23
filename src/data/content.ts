export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Industry', path: '/industry' },
  { name: 'Infrastructure', path: '/infrastructure' },
  { name: 'Quality', path: '/quality' },
  { name: 'Contact', path: '/contact' },
];

export const trustBadges = ['ISO Quality', '28+ Years', '42M+ Springs', '18+ Industries'];

const productImages = {
  compression: '/images/products/compression_springs.jpg',
  extension: '/images/products/extension_springs.jpg',
  torsion: '/images/products/torsion_springs.jpg',
  wireforms: '/images/products/wire_forms.jpg',
  stamping: '/images/products/precision_stamping_parts.jpg',
  assembly: '/images/products/assembly_components.jpg',
};

export const products = [
  {
    name: 'Compression Springs',
    material: 'Chrome Silicon / SS',
    application: 'Suspension, valves',
    description: 'High-load fatigue resistant springs for dynamic force control.',
    image: productImages.compression,
    fallbackImage: '/images/products/compression-springs.svg',
    category: 'dynamic',
  },
  {
    name: 'Extension Springs',
    material: 'Music Wire / Inconel',
    application: 'Return mechanisms',
    description: 'Precision extension response for cyclical industrial operations.',
    image: productImages.extension,
    fallbackImage: '/images/products/extension-springs.svg',
    category: 'dynamic',
  },
  {
    name: 'Torsion Springs',
    material: 'Carbon Steel / SS304',
    application: 'Rotary systems',
    description: 'Torque-stable springs engineered for rotational duty cycles.',
    image: productImages.torsion,
    fallbackImage: '/images/products/torsion-springs.svg',
    category: 'rotary',
  },
  {
    name: 'Wire Forms',
    material: 'Spring Steel / Brass',
    application: 'Custom fixtures',
    description: 'Complex wire geometries bent for precision assemblies.',
    image: productImages.wireforms,
    fallbackImage: '/images/products/wire-forms.svg',
    category: 'custom',
  },
  {
    name: 'Precision Stamping Parts',
    material: 'Hardened Steel',
    application: 'Automotive systems',
    description: 'Micron-level stamped components for durable high-cycle systems.',
    image: productImages.stamping,
    fallbackImage: '/images/products/precision-stamping-parts.svg',
    category: 'custom',
  },
  {
    name: 'Assembly Components',
    material: 'Multi-material',
    application: 'OEM integration',
    description: 'Integrated spring assemblies ready for line-fit manufacturing.',
    image: productImages.assembly,
    fallbackImage: '/images/products/assembly-components.svg',
    category: 'assembly',
  },
];

export const manufacturing = [
  { title: 'Smart Factory Floor', image: '/images/manufacturing/smart-factory-floor.jpg', copy: 'Automated production cells with digital traceability and real-time throughput monitoring.' },
  { title: 'CNC & Coiling Cells', image: '/images/manufacturing/cnc-coiling-cells.jpg', copy: 'High-speed CNC coil forming lines calibrated for tolerance-critical spring profiles.' },
  { title: 'Heat Treatment', image: '/images/manufacturing/heat-treatment.jpg', copy: 'Controlled thermal cycles to optimize elasticity, tensile strength, and fatigue life.' },
  { title: 'Testing Lab', image: '/images/manufacturing/testing-lab.jpg', copy: 'Load, endurance, and dimensional validation with industrial metrology systems.' },
  { title: 'Packaging & Dispatch', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80', copy: 'Protective packaging workflows with batch traceability and export-grade handling.' },
];

export const industries = [
  { name: 'Railway', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1400&q=80' },
  { name: 'Wind Turbine', image: 'https://images.unsplash.com/photo-1467533003447-e295ff1b0435?auto=format&fit=crop&w=1400&q=80' },
  { name: 'Automotive', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80' },
  { name: 'Heavy Machinery', image: '/images/industries/heavy-machinery.png' },
  { name: 'Agriculture', image: '/images/industries/agriculture.jpg' },
  { name: 'Electrical Switchgear', image: '/images/industries/electrical-switchgear.jpg' },
  { name: 'Textiles', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80' },
  { name: 'Commercial Vehicles', image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=80' },
];

export const qualitySteps = ['Material Selection', 'Coiling', 'Heat Treatment', 'Load Testing', 'Final Inspection', 'Dispatch'];

export const stats = [
  { label: 'Annual Capacity', value: '8.5M+' },
  { label: 'On-time Delivery', value: '99.2%' },
  { label: 'Test Protocols', value: '120+' },
  { label: 'Global OEM Programs', value: '46' },
];

export const testimonials = [
  { name: 'A. Sharma', company: 'Rail Mobility Group', quote: 'Their spring consistency transformed our lifecycle reliability targets.' },
  { name: 'S. Iyer', company: 'WindTech Dynamics', quote: 'Engineering depth and delivery discipline are truly world-class.' },
  { name: 'N. Verma', company: 'Prime Auto Systems', quote: 'Premium quality and tight dimensional control across every shipment.' },
];

export const clientLogos = ['NEXA MOTION', 'RAILAXIS', 'TURBOGRID', 'ELECTRA CORE', 'AGROFORGE'];







