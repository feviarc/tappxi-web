type TaxiMarkerProps = {
   status: 'available' | 'busy';
};

export const TaxiMarker = ({status}: TaxiMarkerProps) => {
  return `
   <div style="
    font-size: 24px;
    color: ${status === 'available' ? '#4CAF50' : '#F44336'};
    transform: translate(-50%, -100%);
   ">
      🚕
   </div>
   `;
};
