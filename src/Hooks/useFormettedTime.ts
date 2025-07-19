

const useFormettedTime = (time:any) => {

  const updatedTime = time.toLocaleTimeString([],{
    hour:'2-digit',
    minute:'2-digit',
    hour12:true
  });


  return { updatedTime };
};

export default useFormettedTime;
