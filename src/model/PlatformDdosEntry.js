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
import ValuesDdos from './ValuesDdos';

/**
 * The PlatformDdosEntry model module.
 * @module model/PlatformDdosEntry
 * @version 14.1.0
 */
class PlatformDdosEntry {
    /**
     * Constructs a new <code>PlatformDdosEntry</code>.
     * @alias module:model/PlatformDdosEntry
     */
    constructor() { 
        
        PlatformDdosEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlatformDdosEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlatformDdosEntry} obj Optional instance to populate.
     * @return {module:model/PlatformDdosEntry} The populated <code>PlatformDdosEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformDdosEntry();

            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [ValuesDdos]);
            }
        }
        return obj;
    }


}

/**
 * An array of values representing the metric values at each point in time. Note that this dataset is sparse: only the keys with non-zero values will be included in the record. 
 * @member {Array.<module:model/ValuesDdos>} values
 */
PlatformDdosEntry.prototype['values'] = undefined;






export default PlatformDdosEntry;

