"use client";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { API_BACKEND_URL } from "../config";
import { useEffect, useState } from "react";

interface Website {
    [x: string]: any;
    id: string;
    url: string;
    ticks: {
        id: string;
        createdAt: string;
        status: string;
        latency: number;
    }[];
}

export function useWebsites() {
  const { getToken } = useAuth();
  const [websites , setWebsites] = useState<Website[]>([]);

    async function refreshWebsites() {
        try {
            const token = await getToken();
            const response = await axios.get(`${API_BACKEND_URL}/api/v1/websites`, {
                headers: {
                    Authorization: token,
                },
            });
            // Handle both response.data.websites and response.data formats
            const websitesData = response.data.websites || response.data || [];
            setWebsites(websitesData);
        } catch (error) {
            console.error('Failed to fetch websites:', error);
            setWebsites([]); // Set empty array on error
        }
    }

    useEffect(() => {
    refreshWebsites();

    const interval = setInterval(() => {
            refreshWebsites();
        }, 1000 * 60*1); // Refresh every minute

        return () => clearInterval(interval);
    },[]);

    return { websites, refreshWebsites}; 
}