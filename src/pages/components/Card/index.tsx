import CardBody from './subcomponents/CardBody';
import CardHeader from './subcomponents/CardHeader';

export default function Card() {
  return (
    <div className="card">
      <CardHeader />
      <CardBody />
    </div>
  );
}
