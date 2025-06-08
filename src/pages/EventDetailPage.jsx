import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
      const { id } = useParams();
      return <div className="container mx-auto p-4">
        Event Detail Page for ID: {id} (To be implemented)
        </div>;
    };
    
    export default EventDetailPage;