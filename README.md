# NextJS-Notification

Show Notification In Page

## Installation

To install the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/NextJS-Notification.git
cd NextJS-Notification
npm install
```

## Usage

To use the project, add the `<Notification />` component in the main layout. In each component where you want to use it:

```tsx
import { addNotification } from "./Components/Notification";

addNotification({
  message: "Your message here",
  title: "Your title here",
  type: "info" // or "warning" or "error"
});
```

## Example

Here is an example of how to use the notification system in a component:

```tsx
import { useState } from "react";
import Notification, { addNotification } from "./Components/Notification";

export default function Home() {
  const [notificationType, setNotificationType] = useState<"info" | "warning" | "error">("info");

  const handleAddNotification = () => {
    const text = `This is a ${notificationType} notification generated by the system.`;

    addNotification({
      message: text,
      title: "Notification Title",
      type: notificationType
    });
  };

  return (
    <div>
      <Notification />
      <div className="flex m-2 justify-between items-center">
        <select
          value={notificationType}
          onChange={(e) => setNotificationType(e.target.value as "info" | "warning" | "error")}
          className="border p-2 rounded text-gray-900 cursor-pointer"
        >
          <option value="info">Info</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
        </select>
        <button onClick={handleAddNotification} className="border p-2 rounded">
          Add Notification
        </button>
      </div>
    </div>
  );
}
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

