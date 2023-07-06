/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
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
 * The VclDiff model module.
 * @module model/VclDiff
 * @version 5.0.0
 */
class VclDiff {
    /**
     * Constructs a new <code>VclDiff</code>.
     * @alias module:model/VclDiff
     */
    constructor() { 
        
        VclDiff.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VclDiff</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VclDiff} obj Optional instance to populate.
     * @return {module:model/VclDiff} The populated <code>VclDiff</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VclDiff();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'Number');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'Number');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('diff')) {
                obj['diff'] = ApiClient.convertToType(data['diff'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The version number of the service to which changes in the generated VCL are being compared.
 * @member {Number} from
 */
VclDiff.prototype['from'] = undefined;

/**
 * The version number of the service from which changes in the generated VCL are being compared.
 * @member {Number} to
 */
VclDiff.prototype['to'] = undefined;

/**
 * The format in which compared VCL changes are being returned in.
 * @member {module:model/VclDiff.FormatEnum} format
 */
VclDiff.prototype['format'] = undefined;

/**
 * The differences between two specified versions.
 * @member {String} diff
 */
VclDiff.prototype['diff'] = undefined;





/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
VclDiff['FormatEnum'] = {

    /**
     * value: "text"
     * @const
     */
    "text": "text",

    /**
     * value: "html"
     * @const
     */
    "html": "html",

    /**
     * value: "html_simple"
     * @const
     */
    "html_simple": "html_simple"
};



export default VclDiff;

