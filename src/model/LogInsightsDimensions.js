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
import DimensionBrowser from './DimensionBrowser';
import DimensionContentType from './DimensionContentType';
import DimensionCountry from './DimensionCountry';
import DimensionDevice from './DimensionDevice';
import DimensionOs from './DimensionOs';
import DimensionResponse from './DimensionResponse';
import DimensionStatusCode from './DimensionStatusCode';
import DimensionUrl from './DimensionUrl';

/**
 * The LogInsightsDimensions model module.
 * @module model/LogInsightsDimensions
 * @version 10.0.0
 */
class LogInsightsDimensions {
    /**
     * Constructs a new <code>LogInsightsDimensions</code>.
     * @alias module:model/LogInsightsDimensions
     * @implements module:model/DimensionUrl
     * @implements module:model/DimensionCountry
     * @implements module:model/DimensionStatusCode
     * @implements module:model/DimensionResponse
     * @implements module:model/DimensionBrowser
     * @implements module:model/DimensionContentType
     * @implements module:model/DimensionDevice
     * @implements module:model/DimensionOs
     */
    constructor() { 
        DimensionUrl.initialize(this);DimensionCountry.initialize(this);DimensionStatusCode.initialize(this);DimensionResponse.initialize(this);DimensionBrowser.initialize(this);DimensionContentType.initialize(this);DimensionDevice.initialize(this);DimensionOs.initialize(this);
        LogInsightsDimensions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogInsightsDimensions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogInsightsDimensions} obj Optional instance to populate.
     * @return {module:model/LogInsightsDimensions} The populated <code>LogInsightsDimensions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogInsightsDimensions();
            DimensionUrl.constructFromObject(data, obj);
            DimensionCountry.constructFromObject(data, obj);
            DimensionStatusCode.constructFromObject(data, obj);
            DimensionResponse.constructFromObject(data, obj);
            DimensionBrowser.constructFromObject(data, obj);
            DimensionContentType.constructFromObject(data, obj);
            DimensionDevice.constructFromObject(data, obj);
            DimensionOs.constructFromObject(data, obj);

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('status-code')) {
                obj['status-code'] = ApiClient.convertToType(data['status-code'], 'String');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], 'String');
            }
            if (data.hasOwnProperty('browser')) {
                obj['browser'] = ApiClient.convertToType(data['browser'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('device')) {
                obj['device'] = ApiClient.convertToType(data['device'], 'String');
            }
            if (data.hasOwnProperty('os')) {
                obj['os'] = ApiClient.convertToType(data['os'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The URL path for this dimension.
 * @member {String} url
 */
LogInsightsDimensions.prototype['url'] = undefined;

/**
 * The client's country for this dimension.
 * @member {String} country
 */
LogInsightsDimensions.prototype['country'] = undefined;

/**
 * The HTTP response code for this dimension.
 * @member {String} status-code
 */
LogInsightsDimensions.prototype['status-code'] = undefined;

/**
 * The HTTP reason phrase for this dimension.
 * @member {String} response
 */
LogInsightsDimensions.prototype['response'] = undefined;

/**
 * The client's browser for this dimension.
 * @member {String} browser
 */
LogInsightsDimensions.prototype['browser'] = undefined;

/**
 * The content type of the response for this dimension.
 * @member {String} content_type
 */
LogInsightsDimensions.prototype['content_type'] = undefined;

/**
 * The client's device type for this dimension.
 * @member {String} device
 */
LogInsightsDimensions.prototype['device'] = undefined;

/**
 * The client's operating system for this dimension.
 * @member {String} os
 */
LogInsightsDimensions.prototype['os'] = undefined;


// Implement DimensionUrl interface:
/**
 * The URL path for this dimension.
 * @member {String} url
 */
DimensionUrl.prototype['url'] = undefined;
// Implement DimensionCountry interface:
/**
 * The client's country for this dimension.
 * @member {String} country
 */
DimensionCountry.prototype['country'] = undefined;
// Implement DimensionStatusCode interface:
/**
 * The HTTP response code for this dimension.
 * @member {String} status-code
 */
DimensionStatusCode.prototype['status-code'] = undefined;
// Implement DimensionResponse interface:
/**
 * The HTTP reason phrase for this dimension.
 * @member {String} response
 */
DimensionResponse.prototype['response'] = undefined;
// Implement DimensionBrowser interface:
/**
 * The client's browser for this dimension.
 * @member {String} browser
 */
DimensionBrowser.prototype['browser'] = undefined;
// Implement DimensionContentType interface:
/**
 * The content type of the response for this dimension.
 * @member {String} content_type
 */
DimensionContentType.prototype['content_type'] = undefined;
// Implement DimensionDevice interface:
/**
 * The client's device type for this dimension.
 * @member {String} device
 */
DimensionDevice.prototype['device'] = undefined;
// Implement DimensionOs interface:
/**
 * The client's operating system for this dimension.
 * @member {String} os
 */
DimensionOs.prototype['os'] = undefined;




export default LogInsightsDimensions;

