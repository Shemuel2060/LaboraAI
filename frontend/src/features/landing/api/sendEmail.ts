// --- Utility function for handling Resend API (mock for demo) ---
export const sendViaResend = async (payload: { subject: string; html: string }) => {
    // In a real app, this would call your backend endpoint which then uses Resend
    console.log('Sending email:', payload);
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 500));
    return true;
};