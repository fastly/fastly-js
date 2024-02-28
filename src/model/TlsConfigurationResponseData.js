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
import RelationshipsForTlsConfiguration from './RelationshipsForTlsConfiguration';
import TlsConfigurationData from './TlsConfigurationData';
import TlsConfigurationResponseAttributes from './TlsConfigurationResponseAttributes';
import TlsConfigurationResponseDataAllOf from './TlsConfigurationResponseDataAllOf';
import TypeTlsConfiguration from './TypeTlsConfiguration';

/**
 * The TlsConfigurationResponseData model module.
 * @module model/TlsConfigurationResponseData
 * @version 7.1.0
 */
class TlsConfigurationResponseData {
    /**
     * Constructs a new <code>TlsConfigurationResponseData</code>.
     * @alias module:model/TlsConfigurationResponseData
     * @implements module:model/TlsConfigurationData
     * @implements module:model/TlsConfigurationResponseDataAllOf
     */
    constructor() { 
        TlsConfigurationData.initialize(this);TlsConfigurationResponseDataAllOf.initialize(this);
        TlsConfigurationResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsConfigurationResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsConfigurationResponseData} obj Optional instance to populate.
     * @return {module:model/TlsConfigurationResponseData} The populated <code>TlsConfigurationResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsConfigurationResponseData();
            TlsConfigurationData.constructFromObject(data, obj);
            TlsConfigurationResponseDataAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeTlsConfiguration.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = TlsConfigurationResponseAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipsForTlsConfiguration.constructFromObject(data['relationships']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeTlsConfiguration} type
 */
TlsConfigurationResponseData.prototype['type'] = undefined;

/**
 * @member {module:model/TlsConfigurationResponseAttributes} attributes
 */
TlsConfigurationResponseData.prototype['attributes'] = undefined;

/**
 * @member {module:model/RelationshipsForTlsConfiguration} relationships
 */
TlsConfigurationResponseData.prototype['relationships'] = undefined;

/**
 * @member {String} id
 */
TlsConfigurationResponseData.prototype['id'] = undefined;


// Implement TlsConfigurationData interface:
/**
 * @member {module:model/TypeTlsConfiguration} type
 */
TlsConfigurationData.prototype['type'] = undefined;
/**
 * @member {module:model/TlsConfigurationDataAttributes} attributes
 */
TlsConfigurationData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForTlsConfiguration} relationships
 */
TlsConfigurationData.prototype['relationships'] = undefined;
// Implement TlsConfigurationResponseDataAllOf interface:
/**
 * @member {String} id
 */
TlsConfigurationResponseDataAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/TlsConfigurationResponseAttributes} attributes
 */
TlsConfigurationResponseDataAllOf.prototype['attributes'] = undefined;




export default TlsConfigurationResponseData;

