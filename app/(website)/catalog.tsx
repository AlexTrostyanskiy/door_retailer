<div className="flex gap-2 grow-0 mx-2">

      <div className="h-max bg-gray-300 rounded-lg basis-1/4">
        <div className='bg-teal-100 rounded-lg m-2 py-1 px-2'>категории</div>
        <div className='bg-teal-100 rounded-lg m-2 py-1 px-2'>фильтры</div>
        <div className='bg-teal-100 rounded-lg m-2 py-1 px-2'>еще фильтры</div>
        <div className='bg-teal-100 rounded-lg m-2 py-1 px-2'>что-то еще</div>
        <div className='bg-teal-100 rounded-lg m-2 py-1 px-2'>тоже фильтры</div>
      </div>

      <div className=" bg-slate-300 rounded-lg overflow-auto flex gap-12 p-12 flex-wrap justify-evenly place-items-center basis-3/4">
        {props.doors?.map((door) => <DoorThumbnail price={door.price} title={door.title} imageSrc={door.imageSrc} category={door.category}/>)}
      </div>
      
    </div>