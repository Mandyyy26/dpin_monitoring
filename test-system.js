// Test script to check system components
const axios = require('axios');

async function testSystem() {
    console.log('🧪 Testing system components...\n');
    
    // Test 1: API Health
    try {
        const healthResponse = await axios.get('http://localhost:8001/health');
        console.log('✅ API Server: Running on port 8001');
        console.log('   Response:', healthResponse.data);
    } catch (error) {
        console.log('❌ API Server: Not running on port 8001');
        console.log('   Error:', error.message);
    }
    
    // Test 2: Database connection via API
    try {
        const websitesResponse = await axios.get('http://localhost:8001/api/v1/websites', {
            headers: {
                'Authorization': 'test-token'
            }
        });
        console.log('✅ Database Connection: Working');
        console.log('   Websites found:', websitesResponse.data.length);
    } catch (error) {
        console.log('❌ Database Connection: Failed');
        console.log('   Error:', error.response?.data || error.message);
    }
    
    // Test 3: Hub WebSocket
    try {
        const WebSocket = require('ws');
        const ws = new WebSocket('ws://localhost:8081');
        
        ws.on('open', () => {
            console.log('✅ Hub WebSocket: Connected');
            ws.close();
        });
        
        ws.on('error', (error) => {
            console.log('❌ Hub WebSocket: Not running');
            console.log('   Error:', error.message);
        });
        
        setTimeout(() => {
            if (ws.readyState === WebSocket.CONNECTING) {
                console.log('❌ Hub WebSocket: Connection timeout');
                ws.close();
            }
        }, 3000);
        
    } catch (error) {
        console.log('❌ Hub WebSocket: Error');
        console.log('   Error:', error.message);
    }
}

testSystem();
