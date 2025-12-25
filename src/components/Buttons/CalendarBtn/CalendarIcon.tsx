
export default function CalendarIcon({ size = 16, color = "#363636", opacity = 0.6 }) {
  return (
    <svg  
       
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={opacity} clipPath="url(#clip0_466_269)">
        <path 
          d="M12 2.66675H3.99998C2.52722 2.66675 1.33331 3.86066 1.33331 5.33341V12.0001C1.33331 13.4728 2.52722 14.6667 3.99998 14.6667H12C13.4727 14.6667 14.6666 13.4728 14.6666 12.0001V5.33341C14.6666 3.86066 13.4727 2.66675 12 2.66675Z" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M5.33331 1.33337V4.00004" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M10.6666 1.33337V4.00004" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M1.33331 6.66675H14.6666" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_466_269">
          <rect width="16" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

// Demo
export function Demo() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-gray-50">
      <div className="flex gap-4 items-center">
        <h3 className="text-sm font-semibold text-gray-600">Default:</h3>
        <CalendarIcon />
      </div>
      
      <div className="flex gap-4 items-center">
        <h3 className="text-sm font-semibold text-gray-600">Size 32:</h3>
        <CalendarIcon size={32} />
      </div>
      
      <div className="flex gap-4 items-center">
        <h3 className="text-sm font-semibold text-gray-600">Size 48, Blue:</h3>
        <CalendarIcon size={48} color="#0066cc" />
      </div>
      
      <div className="flex gap-4 items-center">
        <h3 className="text-sm font-semibold text-gray-600">Full opacity:</h3>
        <CalendarIcon size={32} color="#e74c3c" opacity={1} />
      </div>
      
      <div className="flex gap-4 items-center">
        <h3 className="text-sm font-semibold text-gray-600">Multiple icons:</h3>
        <CalendarIcon size={20} />
        <CalendarIcon size={20} color="#27ae60" />
        <CalendarIcon size={20} color="#9b59b6" />
      </div>
    </div>
  );
}