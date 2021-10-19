"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipTlsPrivateKeyTlsPrivateKey = _interopRequireDefault(require("./RelationshipTlsPrivateKeyTlsPrivateKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipTlsPrivateKeys model module.
 * @module model/RelationshipTlsPrivateKeys
 * @version 3.0.0-alpha1
 */
var RelationshipTlsPrivateKeys = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipTlsPrivateKeys</code>.
   * @alias module:model/RelationshipTlsPrivateKeys
   */
  function RelationshipTlsPrivateKeys() {
    _classCallCheck(this, RelationshipTlsPrivateKeys);

    RelationshipTlsPrivateKeys.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipTlsPrivateKeys, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipTlsPrivateKeys</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipTlsPrivateKeys} obj Optional instance to populate.
     * @return {module:model/RelationshipTlsPrivateKeys} The populated <code>RelationshipTlsPrivateKeys</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipTlsPrivateKeys();

        if (data.hasOwnProperty('tls_private_keys')) {
          obj['tls_private_keys'] = _RelationshipTlsPrivateKeyTlsPrivateKey["default"].constructFromObject(data['tls_private_keys']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipTlsPrivateKeys;
}();
/**
 * @member {module:model/RelationshipTlsPrivateKeyTlsPrivateKey} tls_private_keys
 */


RelationshipTlsPrivateKeys.prototype['tls_private_keys'] = undefined;
var _default = RelationshipTlsPrivateKeys;
exports["default"] = _default;