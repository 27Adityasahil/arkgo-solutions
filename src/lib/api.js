export async function submitLead(data) {
  const apiUrl = process.env.NEXT_PUBLIC_CRM_API_URL || 'http://localhost:3001';
  
  try {
    const response = await fetch(`${apiUrl}/public/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 429) {
      throw new Error("Too many requests. Please try again shortly.");
    }
    
    if (response.status === 400) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Please check the information entered.");
    }

    if (!response.ok) {
      throw new Error("We couldn't submit your enquiry right now. Please try again or contact us directly.");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}
