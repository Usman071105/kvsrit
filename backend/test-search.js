const API_URL = 'http://localhost:5000/api';

async function testSearch() {
    try {
        console.log('Testing search API...');
        
        // Test 1: Search for 'computer'
        console.log('\n1. Searching for "computer"...');
        try {
            const res1 = await fetch(`${API_URL}/search?q=computer`);
            const data1 = await res1.json();
            console.log(`Status: ${res1.status}`);
            console.log(`Found ${data1.count} results`);
            if (data1.results && data1.results.length > 0) {
                console.log('First result:', data1.results[0]);
            }
        } catch (e) { console.error('Test 1 failed', e); }

        // Test 2: Search for 'CSE'
        console.log('\n2. Searching for "CSE"...');
        try {
            const res2 = await fetch(`${API_URL}/search?q=CSE`);
            const data2 = await res2.json();
            console.log(`Status: ${res2.status}`);
            console.log(`Found ${data2.count} results`);
        } catch (e) { console.error('Test 2 failed', e); }
        
        // Test 3: Search for 'professor'
        console.log('\n3. Searching for "professor"...');
        try {
            const res3 = await fetch(`${API_URL}/search?q=professor`);
            const data3 = await res3.json();
            console.log(`Status: ${res3.status}`);
            console.log(`Found ${data3.count} results`);
        } catch (e) { console.error('Test 3 failed', e); }

        // Test 4: Empty query
        console.log('\n4. Testing empty query...');
        try {
            const res4 = await fetch(`${API_URL}/search?q=`);
            if (res4.status === 400) {
                console.log('Expected error: 400 Bad Request');
            } else {
                console.log(`Unexpected status: ${res4.status}`);
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }

    } catch (error) {
        console.error('Test failed:', error.message);
    }
}

testSearch();
