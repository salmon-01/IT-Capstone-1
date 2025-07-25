import { useState, useRef, useEffect } from "react";

interface SubCategory {
  name: string;
  href: string;
  description?: string;
}

interface Category {
  name: string;
  href: string;
  subcategories: SubCategory[];
  color: string;
}

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const categories: Category[] = [
    {
      name: "LetzTax",
      href: "/letztax",
      color: "blue",
      subcategories: [
        {
          name: "Income Tax Calculator",
          href: "/letztax/income-tax-calculator",
          description: "Calculate your taxes and potential refunds",
        },
        {
          name: "Tax Class Guide",
          href: "/letztax/tax-class-guide",
          description: "Understand your tax class and obligations",
        },
        {
          name: "Deadline Tracker",
          href: "/letztax/deadlines",
          description: "Never miss important tax deadlines",
        },
        {
          name: "Tax Optimization Guide",
          href: "/letztax/optimization",
          description: "Maximize your deductions and savings",
        },
        {
          name: "Cross-Border Info",
          href: "/letztax/cross-border",
          description: "Special considerations for cross-border workers",
        },
        {
          name: "Document Checklist",
          href: "/letztax/document-checklist",
          description: "Everything you need for filing",
        },
        {
          name: "Filing Tutorials",
          href: "/letztax/tutorials",
          description: "Step-by-step filing guides",
        },
      ],
    },
    // TODO: Add LetzWork when implemented
    // {
    //   name: "LetzWork",
    //   href: "/letzwork",
    //   color: "green",
    //   subcategories: [
    //     {
    //       name: "Job Search",
    //       href: "/letzwork/search",
    //       description: "Find your next opportunity",
    //     },
    //     {
    //       name: "Company Profiles",
    //       href: "/letzwork/companies",
    //       description: "Learn about employers",
    //     },
    //     {
    //       name: "Career Resources",
    //       href: "/letzwork/resources",
    //       description: "Tools and guides for your career",
    //     },
    //     {
    //       name: "Resume Drop",
    //       href: "/letzwork/resume",
    //       description: "Upload your resume to let employers find you",
    //     },
    //     {
    //       name: "Post a Job",
    //       href: "/letzwork/post",
    //       description: "For employers and recruiters",
    //     },
    //   ],
    // },
    // TODO: Add LetzSchool when implemented
    // {
    //   name: "LetzSchool",
    //   href: "/letzschool",
    //   color: "purple",
    //   subcategories: [
    //     {
    //       name: "School Directory",
    //       href: "/letzschool/directory",
    //       description: "Browse all schools in Luxembourg",
    //     },
    //     {
    //       name: "School Reviews",
    //       href: "/letzschool/reviews",
    //       description: "Read parent and student reviews",
    //     },
    //     {
    //       name: "Catchment Maps",
    //       href: "/letzschool/maps",
    //       description: "Find schools in your area",
    //     },
    //     {
    //       name: "Curriculum Guide",
    //       href: "/letzschool/curriculum",
    //       description: "Understand different programs",
    //     },
    //     {
    //       name: "Admission Guide",
    //       href: "/letzschool/admission",
    //       description: "How to apply and enroll",
    //     },
    //     {
    //       name: "Parent Resources",
    //       href: "/letzschool/parents",
    //       description: "Support for parents",
    //     },
    //   ],
    // },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          hover: "hover:text-blue-600",
          border: "border-blue-600",
          bg: "bg-blue-50",
          text: "text-blue-600",
        };
      case "green":
        return {
          hover: "hover:text-green-600",
          border: "border-green-600",
          bg: "bg-green-50",
          text: "text-green-600",
        };
      case "purple":
        return {
          hover: "hover:text-purple-600",
          border: "border-purple-600",
          bg: "bg-purple-50",
          text: "text-purple-600",
        };
      default:
        return {
          hover: "hover:text-slate-600",
          border: "border-slate-600",
          bg: "bg-slate-50",
          text: "text-slate-600",
        };
    }
  };

  const handleMouseEnter = (categoryName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(categoryName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!isHoveringDropdown) {
        setActiveDropdown(null);
      }
    }, 300); // 300ms delay before closing
  };

  const handleDropdownMouseEnter = () => {
    setIsHoveringDropdown(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    setIsHoveringDropdown(false);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-indigo-900 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">🇱🇺</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              LetzGrid
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {categories.map((category) => {
              const colors = getColorClasses(category.color);
              return (
                <div
                  key={category.name}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(category.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={category.href}
                    className={`text-slate-600 ${colors.hover} transition-all duration-300 font-medium relative group text-sm flex items-center space-x-1`}
                  >
                    <span>{category.name}</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 ${colors.bg} transition-all duration-300 group-hover:w-full`}
                    ></span>
                  </a>

                  {/* Dropdown Menu */}
                  {activeDropdown === category.name && (
                    <div
                      className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 py-4 z-50"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <div className="px-6 py-3 border-b border-slate-100">
                        <h3 className={`font-semibold ${colors.text} text-lg`}>
                          {category.name}
                        </h3>
                        <p className="text-slate-500 text-sm mt-1">
                          Everything you need for taxes in Luxembourg
                        </p>
                      </div>
                      <div className="py-2">
                        {category.subcategories.map((subcategory) => (
                          <a
                            key={subcategory.name}
                            href={subcategory.href}
                            className="block px-6 py-3 text-slate-700 hover:bg-slate-50 transition-colors duration-200 group"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium text-sm group-hover:text-slate-900">
                                  {subcategory.name}
                                </div>
                                {subcategory.description && (
                                  <div className="text-xs text-slate-500 mt-1">
                                    {subcategory.description}
                                  </div>
                                )}
                              </div>
                              <svg
                                className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="px-6 py-3 border-t border-slate-100">
                        <a
                          href={category.href}
                          className={`inline-flex items-center ${colors.text} hover:${colors.text} font-semibold transition-colors duration-200 text-sm`}
                        >
                          View all {category.name}
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
