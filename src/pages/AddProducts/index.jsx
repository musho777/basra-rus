import './style.css'
import Select from '@mui/material/Select'
import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Button, Checkbox, ListItemText, OutlinedInput, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { CreatProductAction, GetBrandAction, GetCategory, GetCollectionAction, GetForAge, GetGendersAction, GetPlatforms } from '../../Services/action/action'
import Swal from 'sweetalert2'
import { Plus } from '../../Svg'
export const AddProducts = () => {
    const [details, setDetails] = useState({
        name: '',
        price: '',
        discount: '',
        count: '',
        volume: '',
        code: '',
        // skinType: '',
        gender: '',
        forWho: '',
        platform: '',
        description: '',
        characteristics: '',
        composition: '',
        category: '',
        subcategory: '',
        brand: '',
    })
    const [error, setError] = useState({
        name: '',
        price: '',
        discount: '',
        count: '',
        volume: '',
        code: '',
        // skinType: '',
        gender: '',
        forWho: '',
        platform: '',
        description: '',
        characteristics: '',
        composition: '',
        category: '',
        subcategory: '',
        brand: '',
        photos: ''
    })
    const [selectedSelection, setSelectedSelection] = useState([])
    const [files, setFiles] = useState([])
    const [photos, setPhotos] = useState([])
    const dispatch = useDispatch()
    const [brendsPage, setBrendsPage] = useState(1)
    const [collectionsPage, setCollectionsPage] = useState(1)
    const [categoryPage, setCategpryPage] = useState(1)
    const [photo, setPhoto] = useState([])
    const { getCategory } = useSelector((st) => st)
    const { getCollections } = useSelector((st) => st)
    const { getForAge } = useSelector((st) => st)
    const { createProduct } = useSelector((st) => st)

    const CreateProduct = () => {
        let item = []
        selectedSelection?.map((elm, i) => {
            getCollections?.data?.data.map((e, i) => {
                if (e.name == elm) {
                    item.push(e.id)

                }
            })
        })
        let send = true
        let temp = { ...error }
        if (details.name == '') {
            temp.name = 'anuny partadir e '
            send = false
        }
        else {
            temp.name = ''
            send = true
        }
        if (details.price == '') {
            temp.price = 'giny partadir e '
            send = false

        }
        else {
            temp.price = ''
            send = true
        }
        if (details.count === '') {
            temp.count = 'giny partadir e '
            send = false

        }
        else {
            temp.count = ''
            send = true
        }
        if (details.volume === '') {
            temp.volume = 'giny partadir e '
            send = false

        }
        else {
            temp.volume = ''
            send = true
        }
        if (details.code === '') {
            temp.code = 'giny partadir e '
            send = false
        }
        else {
            temp.code = ''
            send = true
        }

        if (!details.category.id) {
            temp.category = 'giny partadir e '
            send = false
        }
        else {
            temp.category = ''
            send = true
        }



        if (details.forWho === '') {
            temp.forWho = 'giny partadir e '
            send = false
        }
        else {
            temp.forWho = ''
            send = true
        }

        if (details.description === '') {
            temp.description = 'giny partadir e '
            send = false

        }
        else {
            temp.description = ''
            send = true
        }
        if (details.characteristics === '') {
            temp.characteristics = 'giny partadir e '
            send = false
        }
        else {
            temp.characteristics = ''
            send = true
        }
        if (details.composition === '') {
            temp.composition = 'giny partadir e '
            send = false
        }
        else {
            temp.composition = ''
            send = true
        }
        if (details.discount === '') {
            temp.discount = 'giny partadir e '
            send = false
        }
        else {
            temp.discount = ''
            send = true
        }
        if (!details.item?.length) {
            temp.podborki = 'giny partadir e '
            send = false
        }
        else {
            temp.podborki = ''
            send = true
        }
        if (!photo.length) {
            temp.photos = 'giny partadir e '
            send = false
        }
        else {
            temp.photos = ''
            send = true
        }

        setError(temp)
        if (send) {
            dispatch(CreatProductAction({
                name: details.name,
                price: details.price,
                discount: details.discount,
                product_count: details.count,
                volume: details.volume,
                vendor_code: details.code,
                // skin_type: details.skinType,
                parent_category_id: details.category.id,
                category_id: details.subcategory,
                brands_id: details.brand.id,
                gender_id: details.gender,
                for_age_id: details.forWho,
                platform_id: details.platform,
                description: details.description,
                characteristics: details.characteristics,
                compound: details.composition,
                podborki: item,
                photos: photo
            }))
        }
    }

    const SelectCategoy = (e) => {
        setDetails({ ...details, category: e.target.value })
    }

    useEffect(() => {
        dispatch(GetCategory(categoryPage))
    }, [categoryPage])



    useEffect(() => {
        dispatch(GetBrandAction(brendsPage, details.platform))
    }, [brendsPage])

    useEffect(() => {
        dispatch(GetCollectionAction(collectionsPage))
    }, [collectionsPage])

    useEffect(() => {
        dispatch(GetGendersAction())
        dispatch(GetForAge())
        dispatch(GetPlatforms())
        dispatch(GetCategory(details.platform))
        // document.querySelector('.outlet').style.position = 'fixed'
    }, [details.platform])

    const handleSelectionChange = (event) => {
        const { target: { value } } = event
        setSelectedSelection(
            typeof value === 'string' ? value.split(',') : value,
        )
    }

    function handleFileChange(event) {
        const uniqueFile = files?.find(e => e.name === event.target.files[0]?.name)
        let item = [...photo]
        item.push(event.target.files[0])
        setPhoto(item)
        if (!uniqueFile) {
            let ImagesArray = Object.entries(event.target.files).map(e => URL.createObjectURL(e[1]))
            setPhotos([...photos, ...ImagesArray])
            const filesArray = Object.values(event.target.files)
            setFiles([...files, ...filesArray])
        }
    }

    function deleteFile(event) {
        setPhotos(photos.filter((item, index) => index !== event))
        setFiles(files.filter((item, index) => index !== event))
    }

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    })

    function close() {
        document.querySelector('.outlet').style.position = 'relative'
    }
    useEffect(() => {
        if (error.photos != '') {
            Swal.fire(
                'фотография обязательна!',
                '',
                'error'
            )
        }
    }, [error])
    useEffect(() => {
        if (createProduct.status) {
            window.location = '/Product'
        }
        else if (createProduct.error != '') {
            Swal.fire(
                'Код поставщика уже занят',
                '',
                'error'
            )
        }
    }, [createProduct])



    return <div>
        <div className='header'>
            <p>Создание/редактирование товара</p>
        </div>
        <div className='AddProductBlock1'>
            <div className='firstBlock'>
                <input
                    className='Productinput'
                    onChange={(e) => setDetails({ ...details, name: e.target.value })}
                    placeholder='Наименование'
                    value={details?.name}
                    style={{ width: '450px' }}
                />
                <input
                    className='Productinput'
                    onChange={(e) => setDetails({ ...details, code: e.target.value })}
                    value={details?.code}
                    placeholder='Артикул'
                />
                <input
                    value={details?.volume}
                    onChange={(e) => setDetails({ ...details, volume: e.target.value })}
                    className='Productinput'
                    placeholder='Объем'
                />
            </div>
            <div className='firstBlock'>
                <input
                    className='Productinput'
                    type='number'
                    placeholder='Цена без скидки'
                    value={details?.price}
                    onChange={(e) => setDetails({ ...details, price: e.target.value })}
                />

                <input
                    className='Productinput'
                    placeholder='Цена со скидкой'
                    type='number'
                    value={details?.discount}
                    onChange={(e) => setDetails({ ...details, discount: e.target.value })}
                />
                <input
                    className='Productinput'
                    placeholder='Количество'
                    value={details?.count}
                    onChange={(e) => setDetails({ ...details, count: e.target.value })}
                />
            </div>
            <div className='firstBlock'>
                <FormControl style={{ width: "320px" }}>
                    <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                    <Select label="Категория" value={details.category} onChange={(e) => SelectCategoy(e)}  >
                        {getCategory?.data?.data?.map((elm, i) => {
                            return <MenuItem key={i} value={elm}>{elm.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <div >
                    <FormControl variant="filled" className='FormControl' sx={{ width: '320px', borderRadius: 100 }}>
                        <InputLabel>Группы</InputLabel>
                        <Select
                            multiple
                            value={selectedSelection}
                            onChange={handleSelectionChange}
                            input={<OutlinedInput label="Группы" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={{
                                PaperProps: {
                                    style: {
                                        // ITEM_HEIGHT = 48
                                        // ITEM_PADDING_TOP = 8
                                        maxHeight: 48 * 4.5 + 8,
                                        width: 250,
                                    },
                                }
                            }
                            }
                        >
                            {getCollections.data.data?.map((name) => {
                                return <MenuItem key={name} value={name.name}>
                                    <Checkbox checked={selectedSelection.indexOf(name.name) > -1} />
                                    <ListItemText primary={name.name} />
                                </MenuItem>
                            })}
                        </Select>
                    </FormControl>

                </div>
            </div>
            <div className='firstBlock'>
                <FormControl style={{ width: "320px" }}>
                    <InputLabel id="demo-simple-select-label">Возрастная группа</InputLabel>
                    <Select label="Возрастная группа" value={details?.forWho} onChange={(e) => setDetails({ ...details, forWho: e.target.value })}   >
                        {getForAge?.data?.data?.map((elm, i) => {
                            return <MenuItem value={elm.id}>{elm.name}</MenuItem>
                        })
                        }
                    </Select>
                </FormControl>
            </div>
            <div className='firstBlock'>
                <textarea
                    className='ProductTextArea'
                    placeholder='описание'
                    value={details?.description}
                    // style={{ height: '200px' }}
                    onChange={(e) => setDetails({ ...details, description: e.target.value })}
                />
            </div>
            <div className='firstBlock'>
                <textarea
                    className='ProductTextArea'
                    placeholder='Применение'
                    value={details?.characteristics}
                    onChange={(e) => setDetails({ ...details, characteristics: e.target.value })}
                />
            </div>
            <div className='firstBlock'>
                <textarea
                    className='ProductTextArea'
                    placeholder='Состав'
                    value={details?.composition}
                    onChange={(e) => setDetails({ ...details, composition: e.target.value })}
                />
            </div>
            <div className='firstBlock'>
                {photos.length > 0 && photos.map((e, i) => (
                    <div className='eachProductPhoto' key={i}>
                        <img alt='' src={e} />
                        <div className='deletePhoto' onClick={() => deleteFile(i)}>
                        </div>
                    </div>
                ))}
            </div>
            <div className='firstBlock'>
                <Button component="label">
                    <Plus />
                    <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                </Button>
            </div>
            <div className='firstBlock'>
                <button onClick={() => CreateProduct()} className='creatProductButton'>СОХРАНИТЬ</button>
            </div>
        </div>
    </div>
}