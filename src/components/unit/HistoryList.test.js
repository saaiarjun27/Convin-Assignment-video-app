import {render, screen} from '@testing-library/jest-dom';
import HistoryList from "../HistoryList.js"
import axios from "axios";

jest.mock("axios");


describe("fetchHistory", ()=> {    
it('should retrieve history and display it ', async () => {
    history: [
        {
          "id": "d224776e-ebdc-4940-95e8-5c0d51fa470b",
          "name": "Ponniyin Selvan",
          "time": "2023-03-30T11:32:53.170Z"
        },
        {
          "id": "7c7b6e25-ec86-4bf7-bbb0-d297ada587a8",
          "name": "Top 5 beginner bass tricks",
          "time": "2023-03-30T12:12:25.652Z"
        }];
        
        axios.get.mockResolvedValueOnce(history);

        const result = await axios.get("http://localhost:3006/historyStorage");

        expect(axios.get).toHaveBeenCalledWith(`http://localhost:3006/historyStorage`);
        expect(result).toEqual(history);

});
});