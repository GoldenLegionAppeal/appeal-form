document.getElementById('appealForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const caseId = document.getElementById('caseId').value;
    const justified = document.getElementById('justified').value;
    const explanation = document.getElementById('explanation').value || 'N/A';
    const reason = document.getElementById('reason').value;
    const additional = document.getElementById('additional').value || 'N/A';

    const webhookURL = 'https://discord.com/api/webhooks/1275049516281888791/qfpcNT5n1JZ7SSJEGx2fhdIdOnTGxGemtcMi3O0o3xKFhre4fLoY-w2XYdIX95QJa1ml'; // Replace with your actual Discord webhook URL

    const embed = {
        title: "New Ban Appeal Submission",
        fields: [
            {
                name: "Case ID",
                value: caseId,
                inline: true
            },
            {
                name: "Was the Punishment Justified?",
                value: justified,
                inline: true
            },
            {
                name: "Explanation (if No)",
                value: explanation
            },
            {
                name: "Reason for Appeal",
                value: reason
            },
            {
                name: "Additional Information",
                value: additional
            }
        ],
        color: 0x00FF00 // Green color for the embed
    };

    const data = {
        embeds: [embed]
    };

    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Appeal submitted successfully!');
        } else {
            alert('Failed to submit appeal.');
        }
    } catch (error) {
        alert('Error submitting appeal.');
    }
});
