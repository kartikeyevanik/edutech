const Pricing = () => {
  const plans = [
    {
      title: "Free",
      price: "$0",
      period: "/monthly",
      button: "Get started for free",
      features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "2GB storage",
        "Integrations",
        "Basic support",
      ],
      style: "bg-white text-black",
      buttonStyle: "bg-black text-white",
    },
    {
      title: "Pro",
      price: "$9",
      period: "/monthly",
      button: "Sign up now",
      features: [
        "Up to 50 project members",
        "Unlimited tasks and projects",
        "50GB storage",
        "Integrations",
        "Priority support",
        "Advanced support",
        "Export support",
      ],
      style: "bg-black text-white",
      buttonStyle: "bg-white text-black",
    },
    {
      title: "Business",
      price: "$19",
      period: "/monthly",
      button: "Sign up now",
      features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "200GB storage",
        "Integrations",
        "Dedicated account manager",
        "Custom fields",
        "Advanced analytics",
        "Export capabilities",
        "API access",
        "Advanced security features",
      ],
      style: "bg-white text-black",
      buttonStyle: "bg-black text-white",
    },
  ];

  return (
    <section className="bg-[#f9fafe] py-24 px-4">
      <div className="text-center mb-16">
        <span className="inline-block bg-white text-sm text-gray-800 border border-gray-300 rounded-full px-3 py-1 mb-3">
          Boost your productivity
        </span>
        <h2 className="text-[3.75rem] font-bold mb-4 bg-gradient-to-b from-[#000000] to-[#001354] bg-clip-text text-transparent">
          A more effective way <br />
          <span className="">to track progress</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-8 mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-md p-8 flex flex-col justify-between ${plan.style}`}
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="ml-1 text-sm">{plan.period}</span>
              </div>

              <a
                href="#"
                className={`block text-center w-full py-2 rounded-xl font-medium mb-6 ${plan.buttonStyle}`}
              >
                {plan.button}
              </a>

              <ul className="space-y-3 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;