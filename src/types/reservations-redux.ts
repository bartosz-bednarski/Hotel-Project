export type reservationsInitialState = {
  dateRange: Date[];
  room: { id: string; number: string; type: string; price: number };

  actualReservationsForDateRange: [
    {
      _id: string;
      rooms: [
        {
          id: string;
          number: string;
          type: string;
          price: number;
          firstName: string;
          secondName: string;
          email: string;
          phoneNumber: string;
        }
      ];
    }
  ];
  occupiedRooms: string[];
  roomsForSchema: { id: string; status: string }[];
};
