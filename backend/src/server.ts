import app from "./app";
import { ENV } from "./config/env";

const PORT = ENV.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
