import { Kinesis } from 'aws-sdk';

 export const kinesisSend = async (event) => {
  console.log("inicio ->")
  const kinesis = new Kinesis();
  const labKinesisChanel:any = process.env.LAB_CHANNEL_KINESIS;

  kinesis.putRecord({
    Data: JSON.stringify(event),
    PartitionKey: '1',
    StreamName: labKinesisChanel,
  }, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Datos enviados correctamente al canal ${labKinesisChanel}`);
    }
  });
  return "todo completo";

};
