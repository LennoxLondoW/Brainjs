let data = `[
    {
      "Temparature": 26,
      "Humidity": 52,
      "Moisture": 38,
      "Soil Type": "Sandy",
      "Crop Type": "Maize",
      "Nitrogen": 37,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 29,
      "Humidity": 52,
      "Moisture": 45,
      "Soil Type": "Loamy",
      "Crop Type": "Sugarcane",
      "Nitrogen": 12,
      "Potassium": 0,
      "Phosphorous": 36,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 34,
      "Humidity": 65,
      "Moisture": 62,
      "Soil Type": "Black",
      "Crop Type": "Cotton",
      "Nitrogen": 7,
      "Potassium": 9,
      "Phosphorous": 30,
      "Fertilizer Name": "14-35-14"
    },
    {
      "Temparature": 32,
      "Humidity": 62,
      "Moisture": 34,
      "Soil Type": "Red",
      "Crop Type": "Tobacco",
      "Nitrogen": 22,
      "Potassium": 0,
      "Phosphorous": 20,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 28,
      "Humidity": 54,
      "Moisture": 46,
      "Soil Type": "Clayey",
      "Crop Type": "Paddy",
      "Nitrogen": 35,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 26,
      "Humidity": 52,
      "Moisture": 35,
      "Soil Type": "Sandy",
      "Crop Type": "Barley",
      "Nitrogen": 12,
      "Potassium": 10,
      "Phosphorous": 13,
      "Fertilizer Name": "17-17-17"
    },
    {
      "Temparature": 25,
      "Humidity": 50,
      "Moisture": 64,
      "Soil Type": "Red",
      "Crop Type": "Cotton",
      "Nitrogen": 9,
      "Potassium": 0,
      "Phosphorous": 10,
      "Fertilizer Name": "20-20"
    },
    {
      "Temparature": 33,
      "Humidity": 64,
      "Moisture": 50,
      "Soil Type": "Loamy",
      "Crop Type": "Wheat",
      "Nitrogen": 41,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 30,
      "Humidity": 60,
      "Moisture": 42,
      "Soil Type": "Sandy",
      "Crop Type": "Millets",
      "Nitrogen": 21,
      "Potassium": 0,
      "Phosphorous": 18,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 29,
      "Humidity": 58,
      "Moisture": 33,
      "Soil Type": "Black",
      "Crop Type": "Oil seeds",
      "Nitrogen": 9,
      "Potassium": 7,
      "Phosphorous": 30,
      "Fertilizer Name": "14-35-14"
    },
    {
      "Temparature": 27,
      "Humidity": 54,
      "Moisture": 28,
      "Soil Type": "Clayey",
      "Crop Type": "Pulses",
      "Nitrogen": 13,
      "Potassium": 0,
      "Phosphorous": 40,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 31,
      "Humidity": 62,
      "Moisture": 48,
      "Soil Type": "Sandy",
      "Crop Type": "Maize",
      "Nitrogen": 14,
      "Potassium": 15,
      "Phosphorous": 12,
      "Fertilizer Name": "17-17-17"
    },
    {
      "Temparature": 25,
      "Humidity": 50,
      "Moisture": 65,
      "Soil Type": "Loamy",
      "Crop Type": "Cotton",
      "Nitrogen": 36,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 32,
      "Humidity": 62,
      "Moisture": 41,
      "Soil Type": "Clayey",
      "Crop Type": "Paddy",
      "Nitrogen": 24,
      "Potassium": 0,
      "Phosphorous": 22,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 26,
      "Humidity": 52,
      "Moisture": 31,
      "Soil Type": "Red",
      "Crop Type": "Ground Nuts",
      "Nitrogen": 14,
      "Potassium": 0,
      "Phosphorous": 41,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 31,
      "Humidity": 62,
      "Moisture": 49,
      "Soil Type": "Black",
      "Crop Type": "Sugarcane",
      "Nitrogen": 10,
      "Potassium": 13,
      "Phosphorous": 14,
      "Fertilizer Name": "17-17-17"
    },
    {
      "Temparature": 33,
      "Humidity": 64,
      "Moisture": 34,
      "Soil Type": "Clayey",
      "Crop Type": "Pulses",
      "Nitrogen": 38,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 25,
      "Humidity": 50,
      "Moisture": 39,
      "Soil Type": "Sandy",
      "Crop Type": "Barley",
      "Nitrogen": 21,
      "Potassium": 0,
      "Phosphorous": 19,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 28,
      "Humidity": 54,
      "Moisture": 65,
      "Soil Type": "Black",
      "Crop Type": "Cotton",
      "Nitrogen": 39,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 29,
      "Humidity": 58,
      "Moisture": 52,
      "Soil Type": "Loamy",
      "Crop Type": "Wheat",
      "Nitrogen": 13,
      "Potassium": 0,
      "Phosphorous": 36,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 30,
      "Humidity": 60,
      "Moisture": 44,
      "Soil Type": "Sandy",
      "Crop Type": "Millets",
      "Nitrogen": 10,
      "Potassium": 0,
      "Phosphorous": 9,
      "Fertilizer Name": "20-20"
    },
    {
      "Temparature": 34,
      "Humidity": 65,
      "Moisture": 53,
      "Soil Type": "Loamy",
      "Crop Type": "Sugarcane",
      "Nitrogen": 12,
      "Potassium": 14,
      "Phosphorous": 12,
      "Fertilizer Name": "17-17-17"
    },
    {
      "Temparature": 35,
      "Humidity": 68,
      "Moisture": 33,
      "Soil Type": "Red",
      "Crop Type": "Tobacco",
      "Nitrogen": 11,
      "Potassium": 0,
      "Phosphorous": 37,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 28,
      "Humidity": 54,
      "Moisture": 37,
      "Soil Type": "Black",
      "Crop Type": "Millets",
      "Nitrogen": 36,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 33,
      "Humidity": 64,
      "Moisture": 39,
      "Soil Type": "Clayey",
      "Crop Type": "Paddy",
      "Nitrogen": 13,
      "Potassium": 0,
      "Phosphorous": 10,
      "Fertilizer Name": "20-20"
    },
    {
      "Temparature": 26,
      "Humidity": 52,
      "Moisture": 44,
      "Soil Type": "Sandy",
      "Crop Type": "Maize",
      "Nitrogen": 23,
      "Potassium": 0,
      "Phosphorous": 20,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 30,
      "Humidity": 60,
      "Moisture": 63,
      "Soil Type": "Red",
      "Crop Type": "Cotton",
      "Nitrogen": 9,
      "Potassium": 9,
      "Phosphorous": 29,
      "Fertilizer Name": "14-35-14"
    },
    {
      "Temparature": 32,
      "Humidity": 62,
      "Moisture": 30,
      "Soil Type": "Loamy",
      "Crop Type": "Sugarcane",
      "Nitrogen": 38,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 37,
      "Humidity": 70,
      "Moisture": 32,
      "Soil Type": "Black",
      "Crop Type": "Oil seeds",
      "Nitrogen": 12,
      "Potassium": 0,
      "Phosphorous": 39,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 26,
      "Humidity": 52,
      "Moisture": 36,
      "Soil Type": "Clayey",
      "Crop Type": "Pulses",
      "Nitrogen": 14,
      "Potassium": 0,
      "Phosphorous": 13,
      "Fertilizer Name": "20-20"
    },
    {
      "Temparature": 29,
      "Humidity": 58,
      "Moisture": 40,
      "Soil Type": "Red",
      "Crop Type": "Ground Nuts",
      "Nitrogen": 24,
      "Potassium": 0,
      "Phosphorous": 23,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 30,
      "Humidity": 60,
      "Moisture": 27,
      "Soil Type": "Loamy",
      "Crop Type": "Sugarcane",
      "Nitrogen": 12,
      "Potassium": 0,
      "Phosphorous": 40,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 34,
      "Humidity": 65,
      "Moisture": 38,
      "Soil Type": "Clayey",
      "Crop Type": "Paddy",
      "Nitrogen": 39,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 36,
      "Humidity": 68,
      "Moisture": 38,
      "Soil Type": "Sandy",
      "Crop Type": "Barley",
      "Nitrogen": 7,
      "Potassium": 9,
      "Phosphorous": 30,
      "Fertilizer Name": "14-35-14"
    },
    {
      "Temparature": 26,
      "Humidity": 52,
      "Moisture": 48,
      "Soil Type": "Loamy",
      "Crop Type": "Wheat",
      "Nitrogen": 23,
      "Potassium": 0,
      "Phosphorous": 19,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 28,
      "Humidity": 54,
      "Moisture": 35,
      "Soil Type": "Black",
      "Crop Type": "Millets",
      "Nitrogen": 41,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 30,
      "Humidity": 60,
      "Moisture": 61,
      "Soil Type": "Loamy",
      "Crop Type": "Cotton",
      "Nitrogen": 8,
      "Potassium": 10,
      "Phosphorous": 31,
      "Fertilizer Name": "14-35-14"
    },
    {
      "Temparature": 37,
      "Humidity": 70,
      "Moisture": 37,
      "Soil Type": "Clayey",
      "Crop Type": "Paddy",
      "Nitrogen": 12,
      "Potassium": 0,
      "Phosphorous": 41,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 25,
      "Humidity": 50,
      "Moisture": 26,
      "Soil Type": "Red",
      "Crop Type": "Ground Nuts",
      "Nitrogen": 15,
      "Potassium": 14,
      "Phosphorous": 11,
      "Fertilizer Name": "17-17-17"
    },
    {
      "Temparature": 29,
      "Humidity": 58,
      "Moisture": 34,
      "Soil Type": "Sandy",
      "Crop Type": "Millets",
      "Nitrogen": 15,
      "Potassium": 0,
      "Phosphorous": 37,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 27,
      "Humidity": 54,
      "Moisture": 30,
      "Soil Type": "Clayey",
      "Crop Type": "Pulses",
      "Nitrogen": 13,
      "Potassium": 0,
      "Phosphorous": 13,
      "Fertilizer Name": "20-20"
    },
    {
      "Temparature": 30,
      "Humidity": 60,
      "Moisture": 58,
      "Soil Type": "Loamy",
      "Crop Type": "Sugarcane",
      "Nitrogen": 10,
      "Potassium": 7,
      "Phosphorous": 32,
      "Fertilizer Name": "14-35-14"
    },
    {
      "Temparature": 32,
      "Humidity": 62,
      "Moisture": 34,
      "Soil Type": "Red",
      "Crop Type": "Tobacco",
      "Nitrogen": 22,
      "Potassium": 0,
      "Phosphorous": 24,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 34,
      "Humidity": 65,
      "Moisture": 60,
      "Soil Type": "Black",
      "Crop Type": "Sugarcane",
      "Nitrogen": 35,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 35,
      "Humidity": 67,
      "Moisture": 42,
      "Soil Type": "Sandy",
      "Crop Type": "Barley",
      "Nitrogen": 10,
      "Potassium": 0,
      "Phosphorous": 35,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 38,
      "Humidity": 70,
      "Moisture": 48,
      "Soil Type": "Loamy",
      "Crop Type": "Wheat",
      "Nitrogen": 8,
      "Potassium": 8,
      "Phosphorous": 28,
      "Fertilizer Name": "14-35-14"
    },
    {
      "Temparature": 26,
      "Humidity": 52,
      "Moisture": 32,
      "Soil Type": "Black",
      "Crop Type": "Oil seeds",
      "Nitrogen": 12,
      "Potassium": 0,
      "Phosphorous": 8,
      "Fertilizer Name": "20-20"
    },
    {
      "Temparature": 29,
      "Humidity": 58,
      "Moisture": 43,
      "Soil Type": "Clayey",
      "Crop Type": "Paddy",
      "Nitrogen": 24,
      "Potassium": 0,
      "Phosphorous": 18,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 30,
      "Humidity": 60,
      "Moisture": 29,
      "Soil Type": "Red",
      "Crop Type": "Ground Nuts",
      "Nitrogen": 41,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 33,
      "Humidity": 64,
      "Moisture": 51,
      "Soil Type": "Sandy",
      "Crop Type": "Maize",
      "Nitrogen": 5,
      "Potassium": 9,
      "Phosphorous": 29,
      "Fertilizer Name": "14-35-14"
    },
    {
      "Temparature": 34,
      "Humidity": 65,
      "Moisture": 31,
      "Soil Type": "Red",
      "Crop Type": "Tobacco",
      "Nitrogen": 23,
      "Potassium": 0,
      "Phosphorous": 21,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 36,
      "Humidity": 68,
      "Moisture": 33,
      "Soil Type": "Black",
      "Crop Type": "Oil seeds",
      "Nitrogen": 13,
      "Potassium": 0,
      "Phosphorous": 14,
      "Fertilizer Name": "20-20"
    },
    {
      "Temparature": 28,
      "Humidity": 54,
      "Moisture": 38,
      "Soil Type": "Clayey",
      "Crop Type": "Pulses",
      "Nitrogen": 40,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 30,
      "Humidity": 60,
      "Moisture": 47,
      "Soil Type": "Sandy",
      "Crop Type": "Barley",
      "Nitrogen": 12,
      "Potassium": 0,
      "Phosphorous": 42,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 31,
      "Humidity": 62,
      "Moisture": 63,
      "Soil Type": "Red",
      "Crop Type": "Cotton",
      "Nitrogen": 11,
      "Potassium": 12,
      "Phosphorous": 15,
      "Fertilizer Name": "17-17-17"
    },
    {
      "Temparature": 27,
      "Humidity": 53,
      "Moisture": 43,
      "Soil Type": "Black",
      "Crop Type": "Millets",
      "Nitrogen": 23,
      "Potassium": 0,
      "Phosphorous": 24,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 34,
      "Humidity": 65,
      "Moisture": 54,
      "Soil Type": "Loamy",
      "Crop Type": "Wheat",
      "Nitrogen": 38,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 29,
      "Humidity": 58,
      "Moisture": 37,
      "Soil Type": "Sandy",
      "Crop Type": "Millets",
      "Nitrogen": 8,
      "Potassium": 0,
      "Phosphorous": 15,
      "Fertilizer Name": "20-20"
    },
    {
      "Temparature": 25,
      "Humidity": 50,
      "Moisture": 56,
      "Soil Type": "Loamy",
      "Crop Type": "Sugarcane",
      "Nitrogen": 11,
      "Potassium": 13,
      "Phosphorous": 15,
      "Fertilizer Name": "17-17-17"
    },
    {
      "Temparature": 32,
      "Humidity": 62,
      "Moisture": 34,
      "Soil Type": "Red",
      "Crop Type": "Ground Nuts",
      "Nitrogen": 15,
      "Potassium": 0,
      "Phosphorous": 37,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 28,
      "Humidity": 54,
      "Moisture": 41,
      "Soil Type": "Clayey",
      "Crop Type": "Paddy",
      "Nitrogen": 36,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 30,
      "Humidity": 60,
      "Moisture": 49,
      "Soil Type": "Loamy",
      "Crop Type": "Wheat",
      "Nitrogen": 13,
      "Potassium": 0,
      "Phosphorous": 9,
      "Fertilizer Name": "20-20"
    },
    {
      "Temparature": 34,
      "Humidity": 65,
      "Moisture": 64,
      "Soil Type": "Black",
      "Crop Type": "Cotton",
      "Nitrogen": 24,
      "Potassium": 0,
      "Phosphorous": 20,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 28,
      "Humidity": 54,
      "Moisture": 47,
      "Soil Type": "Sandy",
      "Crop Type": "Barley",
      "Nitrogen": 5,
      "Potassium": 18,
      "Phosphorous": 15,
      "Fertilizer Name": "10-26-26"
    },
    {
      "Temparature": 27,
      "Humidity": 53,
      "Moisture": 35,
      "Soil Type": "Black",
      "Crop Type": "Oil seeds",
      "Nitrogen": 37,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 36,
      "Humidity": 68,
      "Moisture": 62,
      "Soil Type": "Red",
      "Crop Type": "Cotton",
      "Nitrogen": 15,
      "Potassium": 0,
      "Phosphorous": 40,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 34,
      "Humidity": 65,
      "Moisture": 57,
      "Soil Type": "Black",
      "Crop Type": "Sugarcane",
      "Nitrogen": 9,
      "Potassium": 0,
      "Phosphorous": 13,
      "Fertilizer Name": "20-20"
    },
    {
      "Temparature": 29,
      "Humidity": 58,
      "Moisture": 55,
      "Soil Type": "Loamy",
      "Crop Type": "Sugarcane",
      "Nitrogen": 8,
      "Potassium": 8,
      "Phosphorous": 33,
      "Fertilizer Name": "14-35-14"
    },
    {
      "Temparature": 25,
      "Humidity": 50,
      "Moisture": 40,
      "Soil Type": "Clayey",
      "Crop Type": "Pulses",
      "Nitrogen": 6,
      "Potassium": 19,
      "Phosphorous": 16,
      "Fertilizer Name": "10-26-26"
    },
    {
      "Temparature": 30,
      "Humidity": 60,
      "Moisture": 38,
      "Soil Type": "Sandy",
      "Crop Type": "Millets",
      "Nitrogen": 10,
      "Potassium": 0,
      "Phosphorous": 14,
      "Fertilizer Name": "20-20"
    },
    {
      "Temparature": 26,
      "Humidity": 52,
      "Moisture": 39,
      "Soil Type": "Clayey",
      "Crop Type": "Pulses",
      "Nitrogen": 21,
      "Potassium": 0,
      "Phosphorous": 23,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 31,
      "Humidity": 62,
      "Moisture": 32,
      "Soil Type": "Red",
      "Crop Type": "Tobacco",
      "Nitrogen": 39,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 34,
      "Humidity": 65,
      "Moisture": 48,
      "Soil Type": "Loamy",
      "Crop Type": "Wheat",
      "Nitrogen": 23,
      "Potassium": 0,
      "Phosphorous": 19,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 27,
      "Humidity": 53,
      "Moisture": 34,
      "Soil Type": "Black",
      "Crop Type": "Oil seeds",
      "Nitrogen": 42,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 33,
      "Humidity": 64,
      "Moisture": 31,
      "Soil Type": "Red",
      "Crop Type": "Ground Nuts",
      "Nitrogen": 13,
      "Potassium": 0,
      "Phosphorous": 39,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 29,
      "Humidity": 58,
      "Moisture": 42,
      "Soil Type": "Clayey",
      "Crop Type": "Paddy",
      "Nitrogen": 9,
      "Potassium": 10,
      "Phosphorous": 22,
      "Fertilizer Name": "14-35-14"
    },
    {
      "Temparature": 30,
      "Humidity": 60,
      "Moisture": 47,
      "Soil Type": "Sandy",
      "Crop Type": "Maize",
      "Nitrogen": 22,
      "Potassium": 0,
      "Phosphorous": 21,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 27,
      "Humidity": 53,
      "Moisture": 59,
      "Soil Type": "Loamy",
      "Crop Type": "Sugarcane",
      "Nitrogen": 10,
      "Potassium": 0,
      "Phosphorous": 15,
      "Fertilizer Name": "20-20"
    },
    {
      "Temparature": 26,
      "Humidity": 52,
      "Moisture": 36,
      "Soil Type": "Clayey",
      "Crop Type": "Pulses",
      "Nitrogen": 7,
      "Potassium": 16,
      "Phosphorous": 20,
      "Fertilizer Name": "10-26-26"
    },
    {
      "Temparature": 34,
      "Humidity": 65,
      "Moisture": 63,
      "Soil Type": "Red",
      "Crop Type": "Cotton",
      "Nitrogen": 14,
      "Potassium": 0,
      "Phosphorous": 38,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 28,
      "Humidity": 54,
      "Moisture": 43,
      "Soil Type": "Clayey",
      "Crop Type": "Paddy",
      "Nitrogen": 10,
      "Potassium": 8,
      "Phosphorous": 29,
      "Fertilizer Name": "14-35-14"
    },
    {
      "Temparature": 30,
      "Humidity": 60,
      "Moisture": 40,
      "Soil Type": "Sandy",
      "Crop Type": "Millets",
      "Nitrogen": 41,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 29,
      "Humidity": 58,
      "Moisture": 65,
      "Soil Type": "Black",
      "Crop Type": "Cotton",
      "Nitrogen": 14,
      "Potassium": 0,
      "Phosphorous": 35,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 26,
      "Humidity": 52,
      "Moisture": 59,
      "Soil Type": "Loamy",
      "Crop Type": "Sugarcane",
      "Nitrogen": 11,
      "Potassium": 0,
      "Phosphorous": 9,
      "Fertilizer Name": "20-20"
    },
    {
      "Temparature": 31,
      "Humidity": 62,
      "Moisture": 44,
      "Soil Type": "Sandy",
      "Crop Type": "Barley",
      "Nitrogen": 21,
      "Potassium": 0,
      "Phosphorous": 28,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 35,
      "Humidity": 67,
      "Moisture": 28,
      "Soil Type": "Clayey",
      "Crop Type": "Pulses",
      "Nitrogen": 8,
      "Potassium": 7,
      "Phosphorous": 31,
      "Fertilizer Name": "14-35-14"
    },
    {
      "Temparature": 29,
      "Humidity": 58,
      "Moisture": 30,
      "Soil Type": "Red",
      "Crop Type": "Tobacco",
      "Nitrogen": 13,
      "Potassium": 17,
      "Phosphorous": 16,
      "Fertilizer Name": "10-26-26"
    },
    {
      "Temparature": 27,
      "Humidity": 53,
      "Moisture": 30,
      "Soil Type": "Black",
      "Crop Type": "Millets",
      "Nitrogen": 35,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 36,
      "Humidity": 68,
      "Moisture": 50,
      "Soil Type": "Loamy",
      "Crop Type": "Wheat",
      "Nitrogen": 12,
      "Potassium": 18,
      "Phosphorous": 19,
      "Fertilizer Name": "10-26-26"
    },
    {
      "Temparature": 29,
      "Humidity": 58,
      "Moisture": 61,
      "Soil Type": "Loamy",
      "Crop Type": "Cotton",
      "Nitrogen": 11,
      "Potassium": 0,
      "Phosphorous": 38,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 30,
      "Humidity": 60,
      "Moisture": 26,
      "Soil Type": "Black",
      "Crop Type": "Oil seeds",
      "Nitrogen": 8,
      "Potassium": 9,
      "Phosphorous": 30,
      "Fertilizer Name": "14-35-14"
    },
    {
      "Temparature": 34,
      "Humidity": 65,
      "Moisture": 45,
      "Soil Type": "Clayey",
      "Crop Type": "Paddy",
      "Nitrogen": 6,
      "Potassium": 19,
      "Phosphorous": 21,
      "Fertilizer Name": "10-26-26"
    },
    {
      "Temparature": 36,
      "Humidity": 68,
      "Moisture": 41,
      "Soil Type": "Red",
      "Crop Type": "Ground Nuts",
      "Nitrogen": 41,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 28,
      "Humidity": 54,
      "Moisture": 25,
      "Soil Type": "Sandy",
      "Crop Type": "Maize",
      "Nitrogen": 9,
      "Potassium": 10,
      "Phosphorous": 30,
      "Fertilizer Name": "14-35-14"
    },
    {
      "Temparature": 25,
      "Humidity": 50,
      "Moisture": 32,
      "Soil Type": "Clayey",
      "Crop Type": "Pulses",
      "Nitrogen": 24,
      "Potassium": 0,
      "Phosphorous": 19,
      "Fertilizer Name": "28-28"
    },
    {
      "Temparature": 30,
      "Humidity": 60,
      "Moisture": 27,
      "Soil Type": "Red",
      "Crop Type": "Tobacco",
      "Nitrogen": 4,
      "Potassium": 17,
      "Phosphorous": 17,
      "Fertilizer Name": "10-26-26"
    },
    {
      "Temparature": 38,
      "Humidity": 72,
      "Moisture": 51,
      "Soil Type": "Loamy",
      "Crop Type": "Wheat",
      "Nitrogen": 39,
      "Potassium": 0,
      "Phosphorous": 0,
      "Fertilizer Name": "Urea"
    },
    {
      "Temparature": 36,
      "Humidity": 60,
      "Moisture": 43,
      "Soil Type": "Sandy",
      "Crop Type": "Millets",
      "Nitrogen": 15,
      "Potassium": 0,
      "Phosphorous": 41,
      "Fertilizer Name": "DAP"
    },
    {
      "Temparature": 29,
      "Humidity": 58,
      "Moisture": 57,
      "Soil Type": "Black",
      "Crop Type": "Sugarcane",
      "Nitrogen": 12,
      "Potassium": 0,
      "Phosphorous": 10,
      "Fertilizer Name": "20-20"
    }
  ]`;