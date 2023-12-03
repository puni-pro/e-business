import React from 'react'


export default class FileSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageData: null
        }
    }
    onFileChange(e) {
        const files = e.target.files
        if (files.length > 0) {
            var file = files[0]
            var reader = new FileReader()
            reader.onload = (e) => {
                this.setState({ imageData: e.target.result })
            };
            reader.readAsDataURL(file)
        } else {
            this.setState({ imageData: null })
        }
    }

    render() {
        const imageData = this.state.imageData
        let preview = ''

        if (imageData != null) {
            preview = (
                <div>
                    <img src={imageData} />
                </div>
            )
        } 
        
        return (
            <div>
                <input type="file" accept="image/*" onChange={
                    (e) => {
                        this.onFileChange(e)
                    }
                } />
                {preview}
            </div>
        )
    }
}

