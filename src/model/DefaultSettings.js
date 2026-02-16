/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DefaultSettings model module.
 * @module model/DefaultSettings
 * @version 15.0.0
 */
class DefaultSettings {
    /**
     * Constructs a new <code>DefaultSettings</code>.
     * @alias module:model/DefaultSettings
     */
    constructor() { 
        
        DefaultSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DefaultSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DefaultSettings} obj Optional instance to populate.
     * @return {module:model/DefaultSettings} The populated <code>DefaultSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DefaultSettings();

            if (data.hasOwnProperty('resize_filter')) {
                obj['resize_filter'] = ApiClient.convertToType(data['resize_filter'], 'String');
            }
            if (data.hasOwnProperty('webp')) {
                obj['webp'] = ApiClient.convertToType(data['webp'], 'Boolean');
            }
            if (data.hasOwnProperty('webp_quality')) {
                obj['webp_quality'] = ApiClient.convertToType(data['webp_quality'], 'Number');
            }
            if (data.hasOwnProperty('jpeg_type')) {
                obj['jpeg_type'] = ApiClient.convertToType(data['jpeg_type'], 'String');
            }
            if (data.hasOwnProperty('jpeg_quality')) {
                obj['jpeg_quality'] = ApiClient.convertToType(data['jpeg_quality'], 'Number');
            }
            if (data.hasOwnProperty('upscale')) {
                obj['upscale'] = ApiClient.convertToType(data['upscale'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_video')) {
                obj['allow_video'] = ApiClient.convertToType(data['allow_video'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The type of filter to use while resizing an image.
 * @member {module:model/DefaultSettings.ResizeFilterEnum} resize_filter
 * @default 'lanczos3'
 */
DefaultSettings.prototype['resize_filter'] = undefined;

/**
 * Controls whether or not to default to WebP output when the client supports it. This is equivalent to adding \"auto=webp\" to all image optimizer requests. 
 * @member {Boolean} webp
 * @default false
 */
DefaultSettings.prototype['webp'] = false;

/**
 * The default quality to use with WebP output. This can be overridden with the second option in the \"quality\" URL parameter on specific image optimizer requests. 
 * @member {Number} webp_quality
 * @default 85
 */
DefaultSettings.prototype['webp_quality'] = 85;

/**
 * The default type of JPEG output to use. This can be overridden with \"format=bjpeg\" and \"format=pjpeg\" on specific image optimizer requests. 
 * @member {module:model/DefaultSettings.JpegTypeEnum} jpeg_type
 * @default 'auto'
 */
DefaultSettings.prototype['jpeg_type'] = undefined;

/**
 * The default quality to use with JPEG output. This can be overridden with the \"quality\" parameter on specific image optimizer requests. 
 * @member {Number} jpeg_quality
 * @default 85
 */
DefaultSettings.prototype['jpeg_quality'] = 85;

/**
 * Whether or not we should allow output images to render at sizes larger than input. 
 * @member {Boolean} upscale
 * @default false
 */
DefaultSettings.prototype['upscale'] = false;

/**
 * Enables GIF to MP4 transformations on this service.
 * @member {Boolean} allow_video
 * @default false
 */
DefaultSettings.prototype['allow_video'] = false;





/**
 * Allowed values for the <code>resize_filter</code> property.
 * @enum {String}
 * @readonly
 */
DefaultSettings['ResizeFilterEnum'] = {

    /**
     * value: "lanczos3"
     * @const
     */
    "lanczos3": "lanczos3",

    /**
     * value: "lanczos2"
     * @const
     */
    "lanczos2": "lanczos2",

    /**
     * value: "bicubic"
     * @const
     */
    "bicubic": "bicubic",

    /**
     * value: "bilinear"
     * @const
     */
    "bilinear": "bilinear",

    /**
     * value: "nearest"
     * @const
     */
    "nearest": "nearest"
};


/**
 * Allowed values for the <code>jpeg_type</code> property.
 * @enum {String}
 * @readonly
 */
DefaultSettings['JpegTypeEnum'] = {

    /**
     * value: "auto"
     * @const
     */
    "auto": "auto",

    /**
     * value: "baseline"
     * @const
     */
    "baseline": "baseline",

    /**
     * value: "progressive"
     * @const
     */
    "progressive": "progressive"
};



export default DefaultSettings;

