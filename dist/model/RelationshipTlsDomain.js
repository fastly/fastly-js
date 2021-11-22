"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipTlsDomainTlsDomain = _interopRequireDefault(require("./RelationshipTlsDomainTlsDomain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipTlsDomain model module.
 * @module model/RelationshipTlsDomain
 * @version 3.0.0-alpha1
 */
var RelationshipTlsDomain = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipTlsDomain</code>.
   * @alias module:model/RelationshipTlsDomain
   */
  function RelationshipTlsDomain() {
    _classCallCheck(this, RelationshipTlsDomain);

    RelationshipTlsDomain.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipTlsDomain, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipTlsDomain</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipTlsDomain} obj Optional instance to populate.
     * @return {module:model/RelationshipTlsDomain} The populated <code>RelationshipTlsDomain</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipTlsDomain();

        if (data.hasOwnProperty('tls_domain')) {
          obj['tls_domain'] = _RelationshipTlsDomainTlsDomain["default"].constructFromObject(data['tls_domain']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipTlsDomain;
}();
/**
 * @member {module:model/RelationshipTlsDomainTlsDomain} tls_domain
 */


RelationshipTlsDomain.prototype['tls_domain'] = undefined;
var _default = RelationshipTlsDomain;
exports["default"] = _default;