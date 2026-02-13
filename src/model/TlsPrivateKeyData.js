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
import RelationshipsForTlsPrivateKey from './RelationshipsForTlsPrivateKey';
import TlsPrivateKeyDataAttributes from './TlsPrivateKeyDataAttributes';
import TypeTlsPrivateKey from './TypeTlsPrivateKey';

/**
 * The TlsPrivateKeyData model module.
 * @module model/TlsPrivateKeyData
 * @version 15.0.0-beta.4
 */
class TlsPrivateKeyData {
    /**
     * Constructs a new <code>TlsPrivateKeyData</code>.
     * @alias module:model/TlsPrivateKeyData
     */
    constructor() { 
        
        TlsPrivateKeyData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsPrivateKeyData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsPrivateKeyData} obj Optional instance to populate.
     * @return {module:model/TlsPrivateKeyData} The populated <code>TlsPrivateKeyData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsPrivateKeyData();

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeTlsPrivateKey.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = TlsPrivateKeyDataAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipsForTlsPrivateKey.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeTlsPrivateKey} type
 */
TlsPrivateKeyData.prototype['type'] = undefined;

/**
 * @member {module:model/TlsPrivateKeyDataAttributes} attributes
 */
TlsPrivateKeyData.prototype['attributes'] = undefined;

/**
 * @member {module:model/RelationshipsForTlsPrivateKey} relationships
 */
TlsPrivateKeyData.prototype['relationships'] = undefined;






export default TlsPrivateKeyData;

